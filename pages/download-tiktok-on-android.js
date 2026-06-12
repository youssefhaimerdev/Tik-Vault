import Head from 'next/head';
import DownloadWidget from '../components/DownloadWidget';

const SITE = 'https://tikvault.app';

export default function AndroidPage() {
  return (
    <>
      <Head>
        <title>Download TikTok Videos on Android Without Watermark (2026) | TikVault</title>
        <meta name="description" content="Save TikTok videos on any Android phone without watermark. Free, no app install needed. Works on Samsung, Xiaomi, OnePlus, and all Android browsers." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE}/download-tiktok-on-android`} />
        <meta property="og:title" content="Download TikTok Videos on Android Without Watermark" />
        <meta property="og:description" content="Free TikTok downloader for Android. No app install, no watermark. Works on Chrome, Firefox and all Android browsers." />
        <meta property="og:url" content={`${SITE}/download-tiktok-on-android`} />
        <meta property="og:image" content={`${SITE}/og-image.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-adsense-account" content="ca-pub-3379075069129713" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Download TikTok Videos on Android Without Watermark",
          "description": "Download any TikTok video to your Android phone without the watermark using TikVault.",
          "step": [
            { "@type": "HowToStep", "name": "Copy the TikTok link", "text": "Open TikTok, tap Share on the video, then tap Copy Link." },
            { "@type": "HowToStep", "name": "Paste into TikVault", "text": "Open tikvault.app in Chrome and paste the link into the input box." },
            { "@type": "HowToStep", "name": "Download the video", "text": "Tap Download, choose HD Video, and the MP4 saves to your Downloads folder." }
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
              <a href="/download-tiktok-on-pc" style={{ color: '#64748b', textDecoration: 'none' }}>PC/Mac</a>
              <a href="/tiktok-mp3-downloader" style={{ color: '#64748b', textDecoration: 'none' }}>MP3</a>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: '#94a3b8', fontFamily: 'monospace', marginBottom: 16 }}>
              <span style={{ color: '#00F5FF' }}>●</span> Free · No Watermark · No App Required
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 12, fontFamily: 'monospace' }}>
              Download TikTok Videos on<br /><span style={{ background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Android Without Watermark</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Save any TikTok video directly to your Android phone in HD — no watermark, no login, no app install. Works on Samsung, Xiaomi, OnePlus and every Android device.
            </p>
          </div>

          <div style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: 24, marginBottom: 48 }}>
            <DownloadWidget placeholder="Paste TikTok link here to download on Android…" />
          </div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>How to Download TikTok on Android — Step by Step</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Copy the TikTok video link', body: 'Open the TikTok app. Find the video you want to save. Tap the Share button (arrow icon on the right), then tap Copy Link. On newer TikTok versions you can also tap "Share to" and then select "Copy link" from the share sheet.' },
                { n: '2', title: 'Open TikVault in Chrome', body: 'Open Google Chrome on your Android device and go to tikvault.app. Tap inside the input box and long-press to paste, or tap the Paste button next to the input field. The link will appear automatically.' },
                { n: '3', title: 'Tap Download', body: 'Tap the Download button. TikVault fetches the video information in a few seconds and shows a popup with download options: HD Video, SD Video, and MP3 Audio.' },
                { n: '4', title: 'Save HD Video — no watermark', body: 'Tap "Download HD Video (No Watermark)." Chrome will download the MP4 file directly to your Downloads folder. You can then find it in your phone\'s Gallery, Files, or Downloads app.' },
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
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Works on Every Android Brand</h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>TikVault is browser-based so it works identically on every Android device regardless of manufacturer or Android version.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
              {['Samsung Galaxy', 'Xiaomi / MIUI', 'OnePlus', 'Google Pixel', 'Huawei', 'Oppo / Realme', 'Sony Xperia', 'Motorola'].map(b => (
                <div key={b} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 10, padding: '12px 14px', textAlign: 'center' }}>
                  <p style={{ color: '#94a3b8', fontSize: 13, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Where Do Downloaded Videos Go on Android?</h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>Downloaded files go to different locations depending on which browser you use:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { browser: 'Google Chrome', location: 'Internal storage → Downloads folder. Find it in the Files app or the Downloads app.' },
                { browser: 'Samsung Internet', location: 'Internal storage → Downloads. Also accessible from Samsung\'s My Files app.' },
                { browser: 'Firefox', location: 'Downloads folder. Firefox shows a notification when complete — tap it to open directly.' },
                { browser: 'Opera / Brave', location: 'Downloads folder. Check the browser\'s built-in downloads panel.' },
              ].map(r => (
                <div key={r.browser} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 18px', display: 'flex', gap: 14 }}>
                  <span style={{ color: '#FF2D78', fontFamily: 'monospace', fontSize: 13, fontWeight: 700, flexShrink: 0, minWidth: 130 }}>{r.browser}</span>
                  <span style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>{r.location}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: 'Why doesn\'t TikTok\'s built-in save button remove the watermark?', a: 'TikTok adds the watermark to videos saved through its own app by design. TikVault bypasses this by downloading the original source file directly from TikTok\'s CDN, before the watermark overlay is added.' },
                { q: 'Do I need to install an APK or any app on my Android?', a: 'No. TikVault runs entirely in your browser. There is nothing to install — no APK, no extension, no account.' },
                { q: 'The download shows as a .mp4 file in my Files app but I can\'t find it in Gallery. Why?', a: 'Some Android launchers and gallery apps don\'t automatically scan the Downloads folder. Open your Files app, navigate to Downloads, and you should find the video there. You can also move it to the DCIM folder to make it appear in Gallery.' },
                { q: 'Can I download private TikTok videos on Android?', a: 'No. TikVault can only process content from public accounts. Private videos are not accessible through any third-party tool.' },
                { q: 'Is it safe to use TikVault on Android?', a: 'Yes. TikVault is browser-based and downloads files the same way any website download works. No permissions are requested beyond what your browser already has.' },
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
                { href: '/download-tiktok-on-pc', label: '💻 PC & Mac Guide' },
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
