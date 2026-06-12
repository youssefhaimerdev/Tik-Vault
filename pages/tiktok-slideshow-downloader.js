import Head from 'next/head';
import DownloadWidget from '../components/DownloadWidget';

const SITE = 'https://tikvault.app';

export default function SlideshowPage() {
  return (
    <>
      <Head>
        <title>TikTok Photo Slideshow Downloader — Save All Images Free | TikVault</title>
        <meta name="description" content="Download TikTok photo slideshows and save every image individually. Free, no watermark, works on iPhone, Android and PC. Supports all TikTok carousel posts." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE}/tiktok-slideshow-downloader`} />
        <meta property="og:title" content="TikTok Photo Slideshow Downloader — Save All Images Free" />
        <meta property="og:description" content="Download every image from any TikTok photo slideshow post. Free, no watermark, all devices." />
        <meta property="og:url" content={`${SITE}/tiktok-slideshow-downloader`} />
        <meta property="og:image" content={`${SITE}/og-image.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-adsense-account" content="ca-pub-3379075069129713" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
      </Head>

      <div style={{ background: '#080B14', color: '#e2e8f0', minHeight: '100vh' }}>
        <header style={{ borderBottom: '1px solid #1A2240' }}>
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'monospace', fontWeight: 700, fontSize: 14 }}>TV</div>
              <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'white', fontSize: 18 }}>Tik<span style={{ color: '#FF2D78' }}>Vault</span></span>
            </a>
            <nav style={{ display: 'flex', gap: 20, fontSize: 13, color: '#64748b' }}>
              <a href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
              <a href="/download-tiktok-on-iphone" style={{ color: '#64748b', textDecoration: 'none' }}>iPhone</a>
              <a href="/download-tiktok-on-android" style={{ color: '#64748b', textDecoration: 'none' }}>Android</a>
              <a href="/tiktok-mp3-downloader" style={{ color: '#64748b', textDecoration: 'none' }}>MP3</a>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: '#94a3b8', fontFamily: 'monospace', marginBottom: 16 }}>
              <span style={{ color: '#00F5FF' }}>●</span> All Images · No Watermark · Free
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 12, fontFamily: 'monospace' }}>
              TikTok Slideshow Downloader<br /><span style={{ background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Save Every Photo Without Watermark</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: 16, maxWidth: 540, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Download every image from any TikTok photo carousel post individually. No watermark, no limit on number of slides, works on all devices.
            </p>
          </div>

          <div style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: 24, marginBottom: 48 }}>
            <DownloadWidget placeholder="Paste TikTok photo slideshow link here…" />
          </div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>How to Download TikTok Slideshow Images</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Find a TikTok photo slideshow post', body: 'Open TikTok and find a photo carousel post — these are posts where you swipe sideways through multiple images rather than watching a video. They often have background music playing while you browse through the photos.' },
                { n: '2', title: 'Copy the post link', body: 'Tap the Share button on the post, then tap Copy Link. The link works whether the post has 2 images or 28 — TikVault handles all sizes.' },
                { n: '3', title: 'Paste into TikVault', body: 'Go to tikvault.app and paste the link into the input field. Tap the Download button. TikVault detects that it is a slideshow post and switches to the photo download interface automatically.' },
                { n: '4', title: 'Download images individually or get the audio', body: 'TikVault displays every image in the slideshow as a thumbnail grid. Tap any thumbnail to download that individual photo as a clean image file. You can also download the background music as an MP3 separately using the audio button below the grid.' },
              ].map(s => (
                <div key={s.n} style={{ display: 'flex', gap: 16, background: '#0D1120', border: '1px solid #1A2240', borderRadius: 14, padding: '16px 20px' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 14, flexShrink: 0, fontFamily: 'monospace' }}>{s.n}</div>
                  <div>
                    <p style={{ color: 'white', fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{s.title}</p>
                    <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Key Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {[
                { icon: '🖼️', title: 'No image limit', body: 'Download slideshows with 2 images or 50 images — all are shown and all are downloadable.' },
                { icon: '✨', title: 'No watermark', body: 'Images are downloaded from TikTok\'s original CDN without any overlay or branding.' },
                { icon: '🎵', title: 'Background audio too', body: 'Download the slideshow\'s background music as a separate MP3 file alongside the images.' },
                { icon: '📱', title: 'All devices', body: 'Works on iPhone, Android, Windows, Mac and Linux in any modern browser.' },
              ].map(c => (
                <div key={c.title} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 14, padding: '18px 20px' }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
                  <p style={{ color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{c.title}</p>
                  <p style={{ color: '#64748b', fontSize: 13, margin: 0, lineHeight: 1.6 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>What Image Format Are TikTok Slideshow Photos?</h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>TikTok stores slideshow images as <strong style={{ color: '#e2e8f0' }}>JPEG or WebP</strong> files at the full resolution the creator uploaded — typically 1080×1920 pixels (portrait) or 1080×1080 pixels (square). TikVault downloads them in the same format and resolution that TikTok stores them, without any re-compression or quality loss.</p>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8 }}>The downloaded files are named with the creator's username, the video ID, and the slide number — for example <code style={{ background: '#0D1120', padding: '2px 8px', borderRadius: 4, fontSize: 13, color: '#94a3b8' }}>@username_7348201984321_slide3.jpg</code> — making it easy to keep track of which image belongs to which post when you download multiple slideshows.</p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: 'How do I know if a TikTok post is a photo slideshow?', a: 'Slideshow posts show multiple images you can swipe through horizontally. They typically have a small image icon (rather than a play button) and you can see dots at the bottom indicating multiple slides. If the TikTok URL leads to a photo post rather than a video, TikVault will automatically detect it.' },
                { q: 'Can I download all images from a slideshow at once?', a: 'Currently TikVault downloads one image at a time — tap each thumbnail to download it individually. For a 5-image slideshow this takes about 5 taps. A batch download option for the full slideshow is something we are looking at for a future update.' },
                { q: 'The link I pasted shows the video download options instead of photo options. Why?', a: 'This happens when the link points to a regular video post, not a photo slideshow. Double-check that you are sharing the link from a slideshow post (one where you swipe through images). Short links (vm.tiktok.com) work the same as full links.' },
                { q: 'Can I download TikTok slideshow images on iPhone?', a: 'Yes. Tap a thumbnail to start downloading, then use Safari\'s Downloads manager to find the file. Tap the file and use the Share sheet to Save Image to your Photos library.' },
                { q: 'Does TikVault download the background music from slideshows?', a: 'Yes. After the image grid, there is a "Download Background Audio (MP3)" button that extracts the background music from the slideshow as a separate audio file.' },
              ].map((f, i) => (
                <details key={i} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 18px' }}>
                  <summary style={{ color: 'white', fontWeight: 600, fontSize: 14, cursor: 'pointer', listStyle: 'none' }}>{f.q}</summary>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>More TikTok Download Tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
              {[
                { href: '/download-tiktok-on-iphone', label: '🍎 iPhone Guide' },
                { href: '/download-tiktok-on-android', label: '📱 Android Guide' },
                { href: '/download-tiktok-on-pc', label: '💻 PC & Mac Guide' },
                { href: '/tiktok-mp3-downloader', label: '🎵 MP3 Audio' },
              ].map(r => (
                <a key={r.href} href={r.href} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 18px', textDecoration: 'none', color: '#94a3b8', fontSize: 14, fontWeight: 500, display: 'block', textAlign: 'center' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#FF2D7850'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#1A2240'}>
                  {r.label}
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer style={{ borderTop: '1px solid #1A2240', marginTop: 48, padding: '24px 16px', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: 13 }}>
            © {new Date().getFullYear()} TikVault ·{' '}
            {[['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact'], ['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/blog', 'Blog']].map(([h, l]) => (
              <span key={h}><a href={h} style={{ color: '#475569', textDecoration: 'none' }}>{l}</a> · </span>
            ))}
          </p>
        </footer>
      </div>
    </>
  );
}
