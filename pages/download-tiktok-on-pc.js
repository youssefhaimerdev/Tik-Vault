import Head from 'next/head';
import DownloadWidget from '../components/DownloadWidget';

const SITE = 'https://tikvault.app';

export default function PcPage() {
  return (
    <>
      <Head>
        <title>Download TikTok Videos on PC & Mac Without Watermark (2026) | TikVault</title>
        <meta name="description" content="Download TikTok videos on Windows PC or Mac without watermark. Free, instant, no software install. Save as HD MP4 directly to your computer." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE}/download-tiktok-on-pc`} />
        <meta property="og:title" content="Download TikTok Videos on PC & Mac Without Watermark" />
        <meta property="og:description" content="Free TikTok downloader for Windows and Mac. No software install, no watermark. Works in any browser." />
        <meta property="og:url" content={`${SITE}/download-tiktok-on-pc`} />
        <meta property="og:image" content={`${SITE}/og-image.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-adsense-account" content="ca-pub-3379075069129713" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Download TikTok Videos on PC or Mac Without Watermark",
          "description": "Download any TikTok video to your computer without watermark using TikVault.",
          "step": [
            { "@type": "HowToStep", "name": "Copy the TikTok URL", "text": "Open TikTok in your browser and copy the video URL from the address bar." },
            { "@type": "HowToStep", "name": "Paste into TikVault", "text": "Go to tikvault.app, paste the URL, and click Download." },
            { "@type": "HowToStep", "name": "Save the MP4", "text": "Choose HD Video and the file downloads to your computer's Downloads folder." }
          ]
        })}} />
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
              <span style={{ color: '#00F5FF' }}>●</span> Windows · Mac · Linux · No Software Install
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 12, fontFamily: 'monospace' }}>
              Download TikTok Videos on<br /><span style={{ background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>PC & Mac Without Watermark</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Download any TikTok video to your computer as a clean HD MP4. No software, no extension, no account. Works in Chrome, Firefox, Edge, and Safari.
            </p>
          </div>

          <div style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: 24, marginBottom: 48 }}>
            <DownloadWidget placeholder="Paste TikTok link here to download to PC or Mac…" />
          </div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>How to Download TikTok on PC & Mac</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Get the TikTok video URL', body: 'On desktop, open TikTok in your browser. Find the video and copy the URL from your browser\'s address bar. Alternatively, in the TikTok app on mobile, tap Share → Copy Link, then send the link to yourself via notes or email and open it on your computer.' },
                { n: '2', title: 'Paste into TikVault', body: 'Go to tikvault.app in a new browser tab. Click inside the input box and paste the URL with Ctrl+V (Windows) or Cmd+V (Mac). The link will appear in the field.' },
                { n: '3', title: 'Click Download', body: 'Click the Download button. TikVault fetches the video data from TikTok\'s servers and presents your download options within a few seconds.' },
                { n: '4', title: 'Choose format and save', body: 'Click "Download HD Video (No Watermark)" for the best quality, or SD Video for a smaller file size. The MP4 will download directly to your computer\'s Downloads folder. For just the audio, choose MP3 Audio.' },
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
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Compatible with All Major Browsers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {[
                { browser: 'Google Chrome', os: 'Windows & Mac', note: 'Best experience. Downloads go to your default Downloads folder instantly.' },
                { browser: 'Mozilla Firefox', os: 'Windows & Mac', note: 'Full support. Firefox shows a download panel in the top-right corner.' },
                { browser: 'Microsoft Edge', os: 'Windows', note: 'Full support. Downloads appear in the Edge Downloads sidebar.' },
                { browser: 'Safari', os: 'Mac only', note: 'Full support on macOS. Files save to your Downloads folder.' },
                { browser: 'Opera / Brave', os: 'Windows & Mac', note: 'Full support. Same workflow as Chrome.' },
                { browser: 'Any browser', os: 'Linux', note: 'TikVault works on Linux in any Chromium or Firefox-based browser.' },
              ].map(r => (
                <div key={r.browser} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 16px' }}>
                  <p style={{ color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{r.browser}</p>
                  <p style={{ color: '#FF2D78', fontSize: 11, fontFamily: 'monospace', marginBottom: 6 }}>{r.os}</p>
                  <p style={{ color: '#64748b', fontSize: 13, margin: 0, lineHeight: 1.6 }}>{r.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>What File Format Do You Get?</h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>All TikTok video downloads from TikVault are delivered as standard <strong style={{ color: '#e2e8f0' }}>MP4 files</strong> encoded with H.264 video and AAC audio. This format is compatible with every major video player and editor:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
              {['VLC Media Player', 'Windows Media Player', 'QuickTime (Mac)', 'Adobe Premiere', 'DaVinci Resolve', 'Final Cut Pro', 'iMovie', 'CapCut'].map(app => (
                <div key={app} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 10, padding: '10px 14px', textAlign: 'center' }}>
                  <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>{app}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: 'Do I need to install any software or browser extension on my PC?', a: 'No. TikVault is entirely web-based. There is nothing to install. Just open tikvault.app in any browser and paste your link.' },
                { q: 'The video downloaded but it plays without sound on my PC. Why?', a: 'TikTok HD videos use the AAC audio codec which is supported by all modern players. If you don\'t hear audio, try opening the file in VLC Media Player which handles all codecs. Alternatively, try the SD version.' },
                { q: 'Can I download multiple TikTok videos at once on PC?', a: 'TikVault processes one video at a time. For bulk downloads, open multiple browser tabs — paste a different link in each and download them simultaneously.' },
                { q: 'What is the maximum video quality I can download on PC?', a: 'TikTok stores videos at up to 1080p Full HD. TikVault downloads the highest quality version available (the HD option), which is typically 1080×1920 at 2,000–6,000 kbps depending on how the creator uploaded the original video.' },
                { q: 'The browser asks "Keep" or "Discard" when downloading. Which do I choose?', a: 'This is a browser security prompt for downloaded executable files. MP4 video files are not executables and are safe — click Keep (or Allow in Firefox) to complete the download.' },
              ].map((f, i) => (
                <details key={i} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 18px' }}>
                  <summary style={{ color: 'white', fontWeight: 600, fontSize: 14, cursor: 'pointer', listStyle: 'none' }}>{f.q}</summary>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Download TikTok on Other Devices</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
              {[
                { href: '/download-tiktok-on-iphone', label: '🍎 iPhone Guide' },
                { href: '/download-tiktok-on-android', label: '📱 Android Guide' },
                { href: '/tiktok-mp3-downloader', label: '🎵 MP3 Audio' },
                { href: '/tiktok-slideshow-downloader', label: '🖼️ Photo Slideshows' },
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
