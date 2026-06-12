import Head from 'next/head';

const SITE_URL = 'https://tikvault.app';

export default function About() {
  return (
    <>
      <Head>
        <title>About TikVault — Free TikTok Video Downloader</title>
        <meta name="description" content="TikVault is a free TikTok downloader built for creators and everyday users who want to save TikTok videos without watermarks, extract audio, and download photo slideshows." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <meta property="og:title" content="About TikVault" />
        <meta property="og:description" content="Learn about TikVault — a free, fast, and private TikTok downloader." />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
      </Head>

      <div style={{ background: '#080B14', color: '#e2e8f0', minHeight: '100vh' }}>
        <header style={{ borderBottom: '1px solid #1A2240' }}>
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'monospace', fontWeight: 700, fontSize: 14 }}>TV</div>
              <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'white', fontSize: 18 }}>Tik<span style={{ color: '#FF2D78' }}>Vault</span></span>
            </a>
            <a href="/" style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'none', border: '1px solid #1A2240', padding: '6px 14px', borderRadius: 20 }}>← Back to Downloader</a>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-14">
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontFamily: 'monospace', background: '#FF2D7815', color: '#FF2D78', padding: '3px 10px', borderRadius: 20, border: '1px solid #FF2D7830' }}>About</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: 'white', marginBottom: 16, fontFamily: 'monospace', lineHeight: 1.3 }}>About TikVault</h1>
          <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 40, borderBottom: '1px solid #1A2240', paddingBottom: 32 }}>
            A free tool built for TikTok users who want more control over the content they discover.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontSize: 15, lineHeight: 1.85, color: '#94a3b8' }}>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10, fontFamily: 'monospace' }}>What is TikVault?</h2>
              <p>TikVault is a free, browser-based TikTok downloader. It lets you save TikTok videos in HD or SD without the floating watermark, extract audio tracks as MP3 files, and download individual images from photo slideshow posts — all without creating an account or installing any software.</p>
              <p>The tool works on any device: iPhone, Android, Windows, Mac, and Linux. All you need is a browser and a TikTok link.</p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10, fontFamily: 'monospace' }}>Why We Built It</h2>
              <p>TikTok's built-in save feature adds a watermark overlay to every downloaded video — a moving badge with the creator's handle and the TikTok logo baked into the frame. For people who want to archive content, reference a clip for editing, save a memory, or simply keep a video for offline viewing, this watermark gets in the way.</p>
              <p>We built TikVault to solve this in the simplest way possible: paste a link, get a clean file. No sign-up, no ads cluttering the result, no browser extension required. Just a straightforward download experience that respects your time.</p>
              <p>The audio extraction feature was added in response to how many people use TikTok as a music discovery platform. Finding a song through a video and wanting to save it for offline listening is a genuinely common use case — and TikTok's app doesn't give you a way to do it.</p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10, fontFamily: 'monospace' }}>Privacy First</h2>
              <p>TikVault does not store any videos, audio files, or images on its servers. When you request a download, the file is streamed directly to your device from TikTok's content delivery network. No copy is ever saved on TikVault's infrastructure.</p>
              <p>We do not track which videos you download, associate downloads with user profiles (since there are no user profiles), or share any activity data with third parties for advertising purposes. The only data we collect is standard web analytics (page views, session length, general country-level location) to understand how the service is being used — the same data any website collects via tools like Google Analytics.</p>
              <p>You can read the full details in our <a href="/privacy" style={{ color: '#FF2D78', textDecoration: 'none' }}>Privacy Policy</a>.</p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10, fontFamily: 'monospace' }}>Responsible Use</h2>
              <p>TikVault is a tool for personal, non-commercial use. Downloading a TikTok video for personal offline viewing is generally considered acceptable use in most jurisdictions. However, re-uploading, redistributing, or monetising someone else's content without their explicit permission raises copyright and platform policy issues.</p>
              <p>We ask all users to respect the creators whose content they download. Credit the original creator if you share their work elsewhere. Seek permission before using someone else's content commercially. Do not use TikVault to infringe on others' intellectual property.</p>
            </section>

            <section>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10, fontFamily: 'monospace' }}>Get in Touch</h2>
              <p>Have a question, a bug report, or a suggestion? We read everything. Reach us through the <a href="/contact" style={{ color: '#FF2D78', textDecoration: 'none' }}>Contact page</a> and we'll get back to you as soon as possible.</p>
              <p>If you're a content creator and have a concern about a specific piece of content, please use the contact form and include the relevant details — we take these requests seriously.</p>
            </section>

          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)', color: 'white', padding: '11px 24px', borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Try TikVault →</a>
            <a href="/contact" style={{ display: 'inline-block', background: '#0D1120', border: '1px solid #1A2240', color: '#94a3b8', padding: '11px 24px', borderRadius: 10, fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Contact Us</a>
          </div>
        </main>

        <footer style={{ borderTop: '1px solid #1A2240', marginTop: 40, padding: '24px 16px', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: 13 }}>© {new Date().getFullYear()} TikVault · <a href="/privacy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy</a> · <a href="/terms" style={{ color: '#475569', textDecoration: 'none' }}>Terms</a> · <a href="/contact" style={{ color: '#475569', textDecoration: 'none' }}>Contact</a></p>
        </footer>
      </div>
    </>
  );
}
