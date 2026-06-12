import Head from 'next/head';
import DownloadWidget from '../components/DownloadWidget';

const SITE = 'https://tikvault.app';

export default function Mp3Page() {
  return (
    <>
      <Head>
        <title>TikTok MP3 Downloader — Extract Audio From Any TikTok Video Free | TikVault</title>
        <meta name="description" content="Download TikTok audio as MP3 for free. Extract any TikTok sound, song, or voiceover in seconds. No watermark, no account, works on iPhone, Android and PC." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE}/tiktok-mp3-downloader`} />
        <meta property="og:title" content="TikTok MP3 Downloader — Extract Audio From Any TikTok Free" />
        <meta property="og:description" content="Download TikTok sounds, songs and voiceovers as MP3 files. Free, instant, works on all devices." />
        <meta property="og:url" content={`${SITE}/tiktok-mp3-downloader`} />
        <meta property="og:image" content={`${SITE}/og-image.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-adsense-account" content="ca-pub-3379075069129713" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Download TikTok Audio as MP3",
          "description": "Extract and download the audio from any TikTok video as an MP3 file.",
          "step": [
            { "@type": "HowToStep", "name": "Copy the TikTok link", "text": "Open TikTok, tap Share on the video, then tap Copy Link." },
            { "@type": "HowToStep", "name": "Paste into TikVault", "text": "Go to tikvault.app and paste the link into the input box." },
            { "@type": "HowToStep", "name": "Download MP3 Audio", "text": "Tap Download then choose MP3 Audio to save just the audio track." }
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
              <a href="/download-tiktok-on-pc" style={{ color: '#64748b', textDecoration: 'none' }}>PC/Mac</a>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: '#94a3b8', fontFamily: 'monospace', marginBottom: 16 }}>
              <span style={{ color: '#00F5FF' }}>●</span> Extract Audio · Free · All Devices
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 12, fontFamily: 'monospace' }}>
              TikTok MP3 Downloader<br /><span style={{ background: 'linear-gradient(135deg,#FF2D78,#8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Extract Any TikTok Audio Free</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: 16, maxWidth: 540, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Download the audio from any TikTok video as an MP3 file. Works for songs, sounds, voiceovers, and background music from photo slideshows — on any device.
            </p>
          </div>

          <div style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, padding: 24, marginBottom: 48 }}>
            <DownloadWidget placeholder="Paste TikTok link here to extract MP3 audio…" />
          </div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>How to Download TikTok Audio as MP3</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Find the TikTok video with the audio you want', body: 'Open TikTok and find the video containing the sound, song, or voiceover you want to save. This works for any public TikTok video — regular videos, duets, stitches, and photo slideshows with background music.' },
                { n: '2', title: 'Copy the video link', body: 'Tap the Share button (arrow icon) on the video, then tap Copy Link. On desktop, copy the URL directly from your browser\'s address bar.' },
                { n: '3', title: 'Paste into TikVault and tap Download', body: 'Go to tikvault.app, paste the link into the input field, and tap the Download button. TikVault will retrieve the video information in a few seconds.' },
                { n: '4', title: 'Select MP3 Audio', body: 'In the download popup, tap "Download MP3 Audio." The audio file will save to your device — Downloads folder on Android and PC, Files app on iPhone. The file is named with the creator\'s username and video ID so you can identify it easily.' },
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
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>What Types of TikTok Audio Can You Download?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {[
                { icon: '🎵', title: 'Songs & Music', body: 'Any licensed or original music used in a TikTok video can be extracted as MP3.' },
                { icon: '🎙️', title: 'Voiceovers', body: 'Save spoken commentary, explanations, tutorials, or interviews as audio files.' },
                { icon: '🔊', title: 'Viral Sounds', body: 'Extract trending sounds and audio memes before they disappear from the platform.' },
                { icon: '🖼️', title: 'Slideshow Music', body: 'Download the background music from TikTok photo slideshows separately as MP3.' },
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
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace' }}>Audio Quality Information</h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>TikTok encodes audio at up to <strong style={{ color: '#e2e8f0' }}>128kbps AAC</strong>. TikVault extracts the existing audio stream from the video file — it does not re-encode or compress it further. This means you get the best quality audio that TikTok stores, delivered as a standard MP3 file that plays in any music app or audio player.</p>
            <div style={{ background: '#0D1120', border: '1px solid #1A2240', borderLeft: '3px solid #FF2D78', borderRadius: 10, padding: '14px 18px' }}>
              <p style={{ color: '#94a3b8', fontSize: 14, margin: 0, lineHeight: 1.7 }}>💡 <strong style={{ color: '#e2e8f0' }}>Note:</strong> If the original video was uploaded with low-quality audio, the MP3 download will reflect that. For commercially released music, streaming services like Spotify or Apple Music are a better source for high-quality audio. TikTok MP3 downloads are ideal for reference listening, saving spoken content, or archiving original sounds before they are removed.</p>
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 20, fontFamily: 'monospace' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: 'How do I find the name of a song I heard in a TikTok?', a: 'In the TikTok app, tap the spinning disc icon at the bottom of the video to see the sound page, which shows the song name and artist. You can also use Shazam on the audio, or download the MP3 via TikVault and run it through a music identification service.' },
                { q: 'Is the TikTok MP3 download free?', a: 'Yes, completely free. No account, no subscription, no download limit.' },
                { q: 'Can I use downloaded TikTok audio in my own videos?', a: 'For personal use — yes. For public or commercial use, you need to check whether the audio is copyrighted. Original sounds created by TikTok users are generally their intellectual property. Licensed music requires a separate license for commercial use outside the TikTok platform.' },
                { q: 'The downloaded file says .mp3 but my phone says it\'s an unsupported format?', a: 'Try opening it with a dedicated music player app like VLC (available free on iOS and Android). Some default players have codec limitations that VLC doesn\'t have.' },
                { q: 'Can I download audio from TikTok Live videos?', a: 'No. TikVault only processes recorded TikTok videos, not live streams. Live videos are not stored as downloadable files on TikTok\'s servers.' },
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
