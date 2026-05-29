/**
 * /api/proxy
 * Fetches a remote video/audio file and streams it back to the browser
 * with Content-Disposition: attachment — forces download instead of new tab.
 */
export const config = {
  api: { responseLimit: false },
};

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const { url, filename = 'tikvault-download' } = req.query;

  if (!url) return res.status(400).json({ error: 'Missing url param' });

  // Only allow tikwm.com URLs to prevent abuse
  let decoded;
  try {
    decoded = decodeURIComponent(url);
  } catch {
    return res.status(400).json({ error: 'Invalid url' });
  }

  const allowedDomains = ['tikwm.com', 'tiktokcdn.com', 'tiktokcdn-us.com'];
  if (!allowedDomains.some(d => decoded.includes(d))) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const upstream = await fetch(decoded, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
        'Referer': 'https://www.tikwm.com/',
      },
      signal: AbortSignal.timeout(30000),
    });

    if (!upstream.ok) {
      return res.status(502).json({ error: 'Failed to fetch file' });
    }

    const contentType = upstream.headers.get('content-type') || 'application/octet-stream';

    // Determine file extension from content type
    let ext = '.mp4';
    if (contentType.startsWith('audio/')) ext = '.mp3';
    else if (contentType.includes('jpeg') || contentType.includes('jpg')) ext = '.jpg';
    else if (contentType.includes('webp')) ext = '.webp';
    else if (contentType.includes('png')) ext = '.png';

    const safeFilename = `${filename}${ext}`;

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${safeFilename}"`);
    res.setHeader('Cache-Control', 'no-store');

    const contentLength = upstream.headers.get('content-length');
    if (contentLength) res.setHeader('Content-Length', contentLength);

    // Stream the response
    const reader = upstream.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    res.end();
  } catch (err) {
    console.error('[TikVault Proxy]', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Download failed. Please try again.' });
    }
  }
}
