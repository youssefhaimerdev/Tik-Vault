import Head from 'next/head';
import DownloadWidget from '../components/DownloadWidget';

const SITE = 'https://tikvault.app';

export default function IphonePage() {
  return (
    <>
      <Head>
        <title>Download TikTok Videos on iPhone Without Watermark (2026) | TikVault</title>
        <meta name="description" content="How to download TikTok videos on iPhone without watermark. Free, no app install. Works on iOS 15, 16, 17, 18 with Safari. Save to Photos in seconds." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE}/download-tiktok-on-iphone`} />
        <meta property="og:title" content="Download TikTok Videos on iPhone Without Watermark" />
        <meta property="og:description" content="Free TikTok downloader for iPhone. No app install, no watermark. Works on all iOS versions." />
        <meta property="og:url" content={`${SITE}/download-tiktok-on-iphone`} />
        <meta property="og:image" content={`${SITE}/og-image.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-adsense-account" content="ca-pub-3379075069129713" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Download TikTok Videos on iPhone Without Watermark",
          "description": "Download any TikTok video to your iPhone without the watermark using TikVault.",
          "step": [
            { "@type": "HowToStep", "name": "Copy the TikTok link", "text": "Open TikTok, tap Share on the video, then tap Copy Link." },
            { "@type": "HowToStep", "name": "Paste into TikVault", "text": "Open tikvault.app in Safari and paste the link into the input box." },
            { "@type": "HowToStep", "name": "Download the video", "text": "Tap Download, choose HD Video, then save the file to your Photos." }
          ]
        })}} />
      </Head>

      <div style={{ background: '#080B14', color: '#e2e8f0', minHeight: '100vh' }}>
        {/* Header */}
        <header style={{ borderBottom: '1px solid #1A2240' }}>
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'monospace', fontWeight: 700, fontSize: 14 }}>TV</div>
              <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'white', fontSize: 18 }}>Tik<span style={{ color: '#FF2D78' }}>Vault</span></span>
            </a>
            <nav style={{ display: 'flex', gap: 20, fontSize: 13, color: '#64748b' }}>
              <a href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
              <a href="/download-tiktok-on-android" style={{ color: '#64748b', textDecoration: 'none' }}>Android</a>
              <a href="/download-tiktok-on-pc" style={{ color: '#64748b', textDecoration: 'none' }}>PC/Mac</a>
              <a href="/tiktok-mp3-downloader" style={{ color: '#64748b', textDecoration: 'none' }}>MP3</a>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: '#94a3b8', fontFamily: 'monospace', marginBottom: 16 }}>
              <span style={{ color: '#00F5FF' }}>●</span> Free · No Watermark · No App Install
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 12, fontFamily: 'monospace' }}>
              Download TikTok Videos on<br /><span style={{ background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>iPhone Without Watermark</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Save any TikTok video to your iPhone as a clean HD MP4 — no watermark, no app, no account. Works on all iOS versions in Safari.
            </p>
          </div>

          {/* Tool */}
          <div style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: 24, marginBottom: 48 }}>
            <DownloadWidget placeholder="Paste TikTok link here to download on iPhone…" />
          </div>

          {/* Step by step */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>How to Download TikTok on iPhone — Step by Step</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Copy the TikTok video link', body: 'Open the TikTok app on your iPhone. Find the video you want to save. Tap the Share button (the arrow icon on the right side), then tap Copy Link. The link is now on your clipboard.' },
                { n: '2', title: 'Open TikVault in Safari', body: 'Open Safari on your iPhone and go to tikvault.app. Tap the input box and paste the link (hold down then tap Paste), or tap the Paste button next to the input field.' },
                { n: '3', title: 'Tap Download and choose your format', body: 'Tap the Download button. A popup appears with HD Video, SD Video, and MP3 Audio options. Tap HD Video for the best quality without watermark.' },
                { n: '4', title: 'Save to your Photos', body: 'Safari will show a download progress indicator in the toolbar. When complete, tap the Downloads icon (arrow pointing down), tap the file, then tap the Share icon and choose Save Video to add it to your Photos library.' },
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

          {/* iOS versions */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Does It Work on My iOS Version?</h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>TikVault works in Safari on all iPhones running iOS 13 and above. Here is what changes between versions:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {[
                { v: 'iOS 18 / 17', note: 'Full support. Downloads go to Files app and Photos automatically.' },
                { v: 'iOS 16', note: 'Full support. Use the Downloads icon in Safari toolbar to save.' },
                { v: 'iOS 15', note: 'Full support. Same Safari Downloads workflow.' },
                { v: 'iOS 13 / 14', note: 'Supported. May need to save via Files app first, then copy to Photos.' },
              ].map(r => (
                <div key={r.v} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 16px' }}>
                  <p style={{ color: '#FF2D78', fontWeight: 700, fontSize: 13, fontFamily: 'monospace', marginBottom: 6 }}>{r.v}</p>
                  <p style={{ color: '#64748b', fontSize: 13, margin: 0, lineHeight: 1.6 }}>{r.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>iPhone Download FAQ</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: 'Why does the video download to Files instead of Photos on iPhone?', a: 'Safari saves files to the Files app by default. To move to Photos: open the Files app, find the video in Downloads, long press it, tap Share, then Save Video. On iOS 17 and later this is often automatic.' },
                { q: 'Can I download TikTok videos without Safari on iPhone?', a: 'Yes — Chrome and Firefox on iOS also support file downloads. The process is the same: paste the link on tikvault.app, tap Download, and save the file through your browser\'s download manager.' },
                { q: 'Will the downloaded video show the TikTok watermark?', a: 'No. TikVault fetches the original video file from TikTok\'s servers before the watermark overlay is applied. The downloaded MP4 is completely clean.' },
                { q: 'Is there a limit to how many TikTok videos I can download on iPhone?', a: 'No limit. TikVault is completely free with no daily cap or account requirement.' },
                { q: 'Can I download TikTok photo slideshows on iPhone?', a: 'Yes. When you paste a slideshow link, TikVault shows all the images as individual thumbnails. Tap each one to download it, or download the background audio as MP3.' },
              ].map((f, i) => (
                <details key={i} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 18px' }}>
                  <summary style={{ color: 'white', fontWeight: 600, fontSize: 14, cursor: 'pointer', listStyle: 'none' }}>{f.q}</summary>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Download TikTok on Other Devices</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
              {[
                { href: '/download-tiktok-on-android', label: '📱 Android Guide' },
                { href: '/download-tiktok-on-pc', label: '💻 PC & Mac Guide' },
                { href: '/tiktok-mp3-downloader', label: '🎵 MP3 Audio' },
                { href: '/tiktok-slideshow-downloader', label: '🖼️ Photo Slideshows' },
              ].map(r => (
                <a key={r.href} href={r.href} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '14px 18px', textDecoration: 'none', color: '#94a3b8', fontSize: 14, fontWeight: 500, display: 'block', textAlign: 'center', transition: 'border-color 0.2s' }}
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
