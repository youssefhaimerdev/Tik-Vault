/**
 * /api/download
 * Proxies TikTok video info lookup via tikwm.com public API.
 * Returns video/audio download URLs stripped of watermark.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Basic TikTok URL validation
  const tiktokPattern = /tiktok\.com|vm\.tiktok\.com|vt\.tiktok\.com/i;
  if (!tiktokPattern.test(url)) {
    return res.status(400).json({ error: 'Please provide a valid TikTok URL.' });
  }

  try {
    const formData = new URLSearchParams();
    formData.append('url', url);
    formData.append('count', '12');
    formData.append('cursor', '0');
    formData.append('web', '1');
    formData.append('hd', '1');

    const response = await fetch('https://www.tikwm.com/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
        'Referer': 'https://www.tikwm.com/',
        'Accept': 'application/json',
      },
      body: formData.toString(),
      // 10 second timeout via AbortController
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status}`);
    }

    const data = await response.json();

    if (data.code !== 0 || !data.data) {
      return res.status(422).json({
        error: data.msg || 'Could not process this video. Make sure it is public.',
      });
    }

    const video = data.data;

    // Slideshow (photo) posts have images but no real video stream.
    // tikwm puts background music in hdplay/play for these — treat them as audio only.
    const isSlideshow = Array.isArray(video.images) && video.images.length > 0;

    // Build a clean, safe response — never expose raw upstream data
    const result = {
      id: video.id,
      title: video.title || 'TikTok Video',
      cover: video.cover || video.origin_cover || null,
      author: {
        nickname: video.author?.nickname || 'Unknown',
        avatar: video.author?.avatar || null,
        username: video.author?.unique_id || '',
      },
      stats: {
        plays: video.play_count ?? 0,
        likes: video.digg_count ?? 0,
        comments: video.comment_count ?? 0,
        shares: video.share_count ?? 0,
      },
      downloads: {
        // For slideshow posts these fields point to audio — hide them
        videoHD: !isSlideshow && video.hdplay
          ? `https://www.tikwm.com${video.hdplay}`
          : null,
        videoSD: !isSlideshow && video.play
          ? `https://www.tikwm.com${video.play}`
          : null,
        // MP3 audio (background music for slideshows, audio track for videos)
        audio: video.music
          ? `https://www.tikwm.com${video.music}`
          : null,
      },
      // Photo slideshow — extract URL string from objects or strings
      images: isSlideshow
        ? video.images.map(img =>
            typeof img === 'string' ? img : (img?.url || img?.download_url || null)
          ).filter(Boolean)
        : [],
      duration: video.duration ?? 0,
    };

    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error('[TikVault API]', err.message);

    if (err.name === 'TimeoutError') {
      return res.status(504).json({ error: 'Request timed out. Please try again.' });
    }

    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
