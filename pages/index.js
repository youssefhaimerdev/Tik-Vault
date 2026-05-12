import Head from 'next/head';
import { useState, useRef, useEffect, useCallback } from 'react';

/* ─── Ad Slot placeholder ─────────────────────────────────────────────────── */
function AdSlot({ className = '', label = 'Advertisement', style = {} }) {
  return (
    <div className={`ad-slot ${className}`} style={style}>
      <span>{label}</span>
      {/* <ins className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-3379075069129713" data-ad-slot="XXXX" data-ad-format="auto" data-full-width-responsive="true"></ins> */}
    </div>
  );
}

function fmtNum(n) {
  if (!n) return '0';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
  return String(n);
}


function proxyUrl(url, filename) {
  if (!url) return null;
  return `/api/proxy?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
}
const IconDownload = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>);
const IconMusic = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>);
const IconVideo = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>);
const IconSearch = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>);
const IconPaste = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>);
const IconClose = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const IconPlay = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
const IconHeart = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
const IconComment = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>);

const FEATURES = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Grab any TikTok video in seconds. No waiting, no queue — instant processing.' },
  { icon: '🚫', title: 'Zero Watermark', desc: 'Clean, watermark-free videos ready to share, repost, or archive.' },
  { icon: '🎵', title: 'MP3 Audio Extract', desc: 'Rip the audio from any TikTok and save it as high-quality MP3.' },
  { icon: '📱', title: 'Works Everywhere', desc: 'iPhone, Android, PC, tablet — no app install needed. Works right in your browser.' },
  { icon: '🔓', title: '100% Free', desc: 'No login. No sign-up. No limits. Unlimited downloads, always free.' },
  { icon: '🎬', title: 'HD Quality', desc: 'Download in original HD resolution. No compression, no quality loss.' },
];

const FAQS = [
  { q: 'How do I download a TikTok video without watermark?', a: 'Paste the TikTok video link into the box above and hit the Download button. TikVault will process the link and give you a clean, watermark-free MP4 file in seconds.' },
  { q: 'Is TikVault free to use?', a: 'Yes — completely free. No account, no subscription, no hidden fees. Download as many videos as you like.' },
  { q: 'Can I download TikTok audio as MP3?', a: "Absolutely. Once the video loads, click the 'Download MP3' button to save just the audio track as a high-quality MP3 file." },
  { q: 'How do I get a TikTok video URL?', a: "Open TikTok (app or website), find the video, tap the Share button, and choose 'Copy Link'. Then paste it into TikVault." },
  { q: 'Does TikVault work on iPhone and Android?', a: 'Yes. TikVault is a mobile-first web app — it works on any device with a browser. No app install required.' },
  { q: 'Are downloaded videos stored on your servers?', a: "No. TikVault only fetches the video URL. Files are served directly from TikTok's CDN. We don't store any videos." },
];

/* ─── Download Modal ──────────────────────────────────────────────────────── */
function DownloadModal({ result, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!result) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(8,11,20,0.88)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0D1120',
          border: '1px solid #1A2240',
          borderRadius: 20,
          width: '100%',
          maxWidth: 480,
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #1A2240' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00F5FF', display: 'inline-block' }} />
            <span style={{ color: '#00F5FF', fontSize: 12, fontFamily: 'monospace' }}>Video ready — choose format</span>
          </div>
          <button onClick={onClose} style={{ background: '#1A2240', border: 'none', borderRadius: 8, padding: 6, color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <IconClose />
          </button>
        </div>

        {/* Top ad */}
        <div style={{ padding: '14px 20px 0' }}>
          <AdSlot label="Advertisement" style={{ height: 90, borderRadius: 10 }} />
        </div>

        {/* Video info */}
        <div style={{ display: 'flex', gap: 14, padding: '16px 20px' }}>
          {result.cover && (
            <div style={{ position: 'relative', flexShrink: 0, width: 64, height: 88, borderRadius: 12, overflow: 'hidden', border: '1px solid #1A2240' }}>
              <img src={result.cover} alt={result.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconPlay /></div>
              </div>
            </div>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: 'white', fontWeight: 600, fontSize: 14, lineHeight: 1.4, marginBottom: 8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{result.title}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              {result.author.avatar && <img src={result.author.avatar} alt={result.author.nickname} style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} loading="lazy" />}
              <span style={{ color: '#64748b', fontSize: 12 }}>@{result.author.username || result.author.nickname}</span>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ color: '#FF2D78', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><IconPlay />{fmtNum(result.stats.plays)}</span>
              <span style={{ color: '#64748b', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><IconHeart />{fmtNum(result.stats.likes)}</span>
              <span style={{ color: '#64748b', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><IconComment />{fmtNum(result.stats.comments)}</span>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: '#1A2240', margin: '0 20px' }} />

        {/* Download buttons */}
        <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ color: '#475569', fontSize: 11, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Choose format</p>

          {result.downloads.videoHD && (
            <a href={proxyUrl(result.downloads.videoHD, "tikvault-hd")}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 20px', borderRadius: 12, background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)', color: 'white', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              <IconVideo /> Download HD Video (No Watermark)
            </a>
          )}

          {result.downloads.videoSD && (
            <a href={proxyUrl(result.downloads.videoSD, "tikvault-sd")}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 20px', borderRadius: 12, background: '#0D1120', border: '1px solid #1A2240', color: '#94a3b8', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
              <IconDownload /> Download SD Video
            </a>
          )}

          {result.downloads.audio && (
            <a href={proxyUrl(result.downloads.audio, "tikvault-audio")}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 20px', borderRadius: 12, background: '#0D1120', border: '1px solid #1A2240', color: '#00F5FF', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
              <IconMusic /> Download MP3 Audio
            </a>
          )}

          {result.images?.length > 0 && (
            <div style={{ marginTop: 8 }}>
              <p style={{ color: '#475569', fontSize: 11, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Slideshow ({result.images.length} images)</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {result.images.slice(0, 8).map((img, i) => (
                  <a key={i} href={img} download target="_blank" rel="noopener noreferrer"
                    style={{ aspectRatio: '9/16', borderRadius: 8, overflow: 'hidden', border: '1px solid #1A2240', display: 'block' }}>
                    <img src={img} alt={`Slide ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom ad */}
        <div style={{ padding: '0 20px 20px' }}>
          <AdSlot label="Advertisement" style={{ height: 250, borderRadius: 10 }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(30px) scale(0.96) } to { opacity:1; transform:translateY(0) scale(1) } }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const inputRef = useRef(null);
  const closeModal = useCallback(() => setResult(null), []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Failed to fetch video. Please check the URL and try again.');
      } else {
        setResult(data.data);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      inputRef.current?.focus();
    } catch {
      inputRef.current?.focus();
    }
  }

  const SITE_URL = 'https://tikvault.app';
  const TITLE = 'TikVault — Download TikTok Videos Without Watermark Free';
  const DESCRIPTION = 'TikVault is the fastest free TikTok video downloader. Save TikTok videos without watermark in HD MP4 or extract MP3 audio instantly. No login required. Works on iPhone, Android & PC.';

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="tiktok downloader, download tiktok video, tiktok no watermark, save tiktok video, tiktok mp3 downloader, tiktok video saver, tiktok hd download, tikvault" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="TikVault" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="google-adsense-account" content="ca-pub-3379075069129713" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      {result && <DownloadModal result={result} onClose={closeModal} />}

      <div className="relative min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #FF2D7815 0%, transparent 70%)' }} />
        <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #8B5CF615 0%, transparent 70%)' }} />

        {/* HEADER */}
        <header className="relative z-10 border-b border-[#1A2240]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF2D78] to-[#8B5CF6] flex items-center justify-center text-white font-mono font-bold text-sm glow-pink">TV</div>
              <span className="font-mono font-bold text-white text-lg tracking-tight">Tik<span className="text-[#FF2D78]">Vault</span></span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
              <a href="#how-to" className="hover:text-white transition-colors">How it works</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
            </nav>
            <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#FF2D7840] text-[#FF2D78] hidden sm:block">Always Free</span>
          </div>
        </header>

        {/* TOP AD */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-4">
          <AdSlot label="Advertisement — 728×90" className="h-[90px] hidden md:flex" />
          <AdSlot label="Advertisement — 320×50" className="h-[50px] flex md:hidden" />
        </div>

        {/* HERO */}
        <main className="relative z-10 max-w-3xl mx-auto px-4 pt-10 pb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2240] bg-[#0D1120] text-xs font-mono text-slate-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5FF] inline-block animate-pulse-slow" />
            No watermark · No login · Unlimited downloads
          </div>
          <h1 className="font-mono font-bold text-3xl sm:text-5xl leading-tight mb-4">
            <span className="gradient-text">Download TikTok</span><br />
            <span className="text-white">Videos Free</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Save any TikTok video <strong className="text-white">without watermark</strong> in HD quality — or extract the audio as MP3. Instant, free, no account needed.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-[#0D1120] border border-[#1A2240] rounded-2xl overflow-hidden transition-all duration-300 focus-within:border-[#FF2D78] focus-within:shadow-[0_0_0_3px_#FF2D7818,0_0_30px_#FF2D7815]">
              <input
                ref={inputRef} type="url" value={url} onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste TikTok link here…"
                className="flex-1 bg-transparent px-5 py-4 sm:py-5 text-white placeholder-slate-600 text-sm sm:text-base outline-none min-w-0"
                autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
              />
              {!url && (
                <button type="button" onClick={handlePaste} className="flex items-center gap-1.5 px-3 py-2 mx-2 text-xs text-slate-400 border border-[#1A2240] rounded-lg hover:border-[#FF2D78] hover:text-[#FF2D78] transition-all">
                  <IconPaste /><span className="hidden sm:inline">Paste</span>
                </button>
              )}
              {url && (
                <button type="button" onClick={() => { setUrl(''); setError(''); }} className="p-3 text-slate-600 hover:text-slate-300 transition-colors">
                  <IconClose />
                </button>
              )}
              <button type="submit" disabled={loading || !url.trim()}
                className="m-1.5 px-5 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#FF2D78] to-[#8B5CF6] text-white font-semibold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:opacity-90 active:scale-95 btn-shimmer whitespace-nowrap flex items-center gap-2">
                {loading
                  ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span className="hidden sm:inline">Fetching…</span></>
                  : <><IconSearch /><span className="hidden sm:inline">Download</span></>
                }
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-600 font-mono">Works with tiktok.com, vm.tiktok.com and short links</p>
          </form>

          {error && <div className="mt-4 p-4 rounded-xl bg-[#FF2D7810] border border-[#FF2D7840] text-[#FF2D78] text-sm">{error}</div>}
        </main>

        {/* MID AD */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 pb-8">
          <AdSlot label="Advertisement — 336×280" className="h-[280px] max-w-sm mx-auto" />
        </div>

        {/* HOW TO */}
        <section id="how-to" className="relative z-10 max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-mono font-bold text-2xl sm:text-3xl text-center text-white mb-2">How to Download TikTok Videos</h2>
          <p className="text-center text-slate-500 text-sm mb-12">Three steps. Ten seconds. Done.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Copy the TikTok link', desc: 'Open TikTok, find your video, tap Share → Copy Link.', icon: '🔗' },
              { step: '02', title: 'Paste it into TikVault', desc: 'Tap the input box above, paste the link, and hit Download.', icon: '📋' },
              { step: '03', title: 'Save your file', desc: 'Choose HD video, SD video, or MP3 audio. Tap download and enjoy.', icon: '💾' },
            ].map((s) => (
              <div key={s.step} className="relative bg-[#0D1120] border border-[#1A2240] rounded-2xl p-6 hover:border-[#FF2D7850] transition-colors group">
                <div className="font-mono text-4xl font-bold text-[#FF2D7820] group-hover:text-[#FF2D7840] absolute top-4 right-5">{s.step}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MID AD 2 */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-8">
          <AdSlot label="Advertisement — 728×90" className="h-[90px] hidden md:flex" />
          <AdSlot label="Advertisement — 320×100" className="h-[100px] flex md:hidden" />
        </div>

        {/* FEATURES */}
        <section id="features" className="relative z-10 max-w-5xl mx-auto px-4 py-8 pb-16">
          <h2 className="font-mono font-bold text-2xl sm:text-3xl text-center text-white mb-2">Why Choose TikVault?</h2>
          <p className="text-center text-slate-500 text-sm mb-12">The fastest, cleanest TikTok downloader on the web.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-5 hover:border-[#FF2D7840] transition-all hover:translate-y-[-2px] duration-200">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white mb-1.5 text-sm">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative z-10 max-w-3xl mx-auto px-4 py-8 pb-16">
          <h2 className="font-mono font-bold text-2xl sm:text-3xl text-center text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-center text-slate-500 text-sm mb-10">Everything you need to know.</p>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-[#0D1120] border border-[#1A2240] rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-white text-sm font-medium pr-4 leading-snug">{faq.q}</span>
                  <span className={`text-[#FF2D78] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-[#1A2240] pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM AD */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-8">
          <AdSlot label="Advertisement — 728×90" className="h-[90px] hidden md:flex" />
          <AdSlot label="Advertisement — 320×50" className="h-[50px] flex md:hidden" />
        </div>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-[#1A2240] mt-4">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF2D78] to-[#8B5CF6] flex items-center justify-center text-white font-mono font-bold text-xs">TV</div>
                <span className="font-mono font-bold text-white">Tik<span className="text-[#FF2D78]">Vault</span></span>
              </div>
              <nav className="flex items-center gap-6 text-xs text-slate-500 flex-wrap justify-center">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </nav>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1A2240] text-center">
              <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
                TikVault is an independent tool and is not affiliated with, endorsed by, or associated with TikTok or ByteDance Ltd. Downloaded content is for personal use only. Users are responsible for ensuring they have permission to download and use any content.
              </p>
              <p className="text-xs text-slate-700 mt-3 font-mono">© {new Date().getFullYear()} TikVault · All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
