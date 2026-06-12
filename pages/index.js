import Head from 'next/head';
import { useState, useRef, useEffect, useCallback } from 'react';

function AdSlot({ className = '', style = {} }) {
  const wrapRef = useRef(null);
  const insRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (_) {}

    const ins = insRef.current;
    if (!ins) return;

    // AdSense sets data-ad-status="filled" when an ad loads — watch for it
    const mo = new MutationObserver(() => {
      if (ins.getAttribute('data-ad-status') === 'filled') {
        setVisible(true);
        mo.disconnect();
      }
    });
    mo.observe(ins, { attributes: true, attributeFilter: ['data-ad-status'] });
    return () => mo.disconnect();
  }, []);

  // IMPORTANT: visibility is controlled on the wrapper div, NOT the ins element.
  // This preserves the responsive Tailwind classes (hidden md:flex / flex md:hidden)
  // which would be overridden if display were set as inline style on the ins itself.
  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ display: visible ? undefined : 'none', ...style }}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-3379075069129713"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
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

const FAQS = [
  {
    q: 'How do I download a TikTok video without watermark?',
    a: 'Open TikTok, find the video you want to save, tap the Share button and select Copy Link. Then paste the link into the input field above and click Download. TikVault will remove the TikTok watermark and give you a clean MP4 file in seconds.',
  },
  {
    q: 'Is TikVault free to use?',
    a: 'Yes, TikVault is completely free. There is no account required, no subscription, and no download limit. You can download as many TikTok videos without watermark as you like.',
  },
  {
    q: 'How do I download a TikTok video on Android?',
    a: 'Open the TikTok app on your Android phone. Find the video you want to download and tap the Share button on the right side. Tap Copy Link. Open your browser, go to tikvault.app, paste the link, and tap Download. The video will be saved to your Downloads folder.',
  },
  {
    q: 'How do I download a TikTok video on iPhone (iOS)?',
    a: 'Open TikTok on your iPhone and find your video. Tap Share then Copy Link. Open Safari, go to tikvault.app, paste the link and tap Download. On iOS 13 and above, tap the download icon in Safari to save the video to your Photos library.',
  },
  {
    q: 'How do I download a TikTok video on PC or Mac?',
    a: 'Go to TikTok.com in your browser, find the video, and copy the URL from the address bar. Then open tikvault.app in another tab, paste the URL into the input box, and click Download. The MP4 file will be saved to your Downloads folder.',
  },
  {
    q: 'Can I download TikTok audio as MP3?',
    a: 'Yes. After pasting your TikTok link and clicking Download, a popup will appear with three options — HD Video, SD Video, and MP3 Audio. Click Download MP3 Audio to save just the sound from the video as a high-quality MP3 file.',
  },
  {
    q: 'How do I convert TikTok to MP4?',
    a: 'TikVault automatically converts TikTok videos to MP4 format. Paste the TikTok link into the box above, click Download, and choose either HD Video or SD Video. Both are saved as MP4 files compatible with all devices and video editors.',
  },
  {
    q: 'Where are downloaded TikTok videos saved?',
    a: 'Downloaded videos are saved to your browser\'s default download folder. On Windows this is usually the Downloads folder. On iPhone, videos are saved to your Photos library. You can change the download location in your browser settings.',
  },
  {
    q: 'Can I download TikTok videos from private accounts?',
    a: 'No. TikVault can only download videos from public TikTok accounts. Private account videos are not accessible without logging in, so the tool cannot process them.',
  },
  {
    q: 'Do I need to install any software or app?',
    a: 'No installation is required. TikVault is a web-based TikTok downloader that works directly in your browser on any device — Android, iPhone, iPad, PC, or Mac.',
  },
  {
    q: 'Does TikVault store downloaded videos?',
    a: 'No. TikVault does not store or keep any videos. The download links are served directly from TikTok\'s CDN servers. We do not keep any record of videos you download.',
  },
  {
    q: 'What devices and browsers are supported?',
    a: 'TikVault works on all modern browsers including Chrome, Safari, Firefox, and Edge. It supports Android phones, iPhones, iPads, Windows PCs, Mac computers, and Linux.',
  },
];

/* ─── Download Modal ──────────────────────────────────────────────────────── */
function DownloadModal({ result, onClose }) {
  // Build a creator-named filename: @username_videoId
  const baseFilename = (() => {
    const user = (result.author?.username || result.author?.nickname || 'tiktok')
      .replace(/[^a-zA-Z0-9_]/g, '');
    const id = result.id || Date.now();
    return `@${user}_${id}`;
  })();

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
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(8,11,20,0.88)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', animation: 'fadeIn 0.2s ease' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, width: '100%', maxWidth: 480, maxHeight: '90vh', overflowY: 'auto', animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #1A2240' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00F5FF', display: 'inline-block' }} />
            <span style={{ color: '#00F5FF', fontSize: 12, fontFamily: 'monospace' }}>Video ready — choose format</span>
          </div>
          <button onClick={onClose} style={{ background: '#1A2240', border: 'none', borderRadius: 8, padding: 6, color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><IconClose /></button>
        </div>

        {/* Top ad */}
        <div style={{ padding: '14px 20px 0' }}>
          <AdSlot style={{ height: 90, borderRadius: 10 }} />
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

          {result.images?.length > 0 ? (
            /* ── SLIDESHOW POST ── */
            <>
              <p style={{ color: '#475569', fontSize: 11, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                Photo Slideshow · {result.images.length} image{result.images.length !== 1 ? 's' : ''}
              </p>
              <div style={{ maxHeight: 380, overflowY: 'auto', paddingRight: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                  {result.images.map((img, i) => (
                    <a key={i} href={proxyUrl(img, `${baseFilename}_slide${i + 1}`)} download
                      style={{ aspectRatio: '9/16', borderRadius: 8, overflow: 'hidden', border: '1px solid #1A2240', display: 'block', position: 'relative' }}>
                      <img src={img} alt={`Slide ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      <div style={{ position: 'absolute', bottom: 4, right: 4, background: '#00000080', borderRadius: 4, padding: '2px 5px', fontSize: 10, color: 'white', fontFamily: 'monospace' }}>↓</div>
                      <div style={{ position: 'absolute', top: 4, left: 4, background: '#00000080', borderRadius: 4, padding: '2px 5px', fontSize: 9, color: '#94a3b8', fontFamily: 'monospace' }}>{i + 1}</div>
                    </a>
                  ))}
                </div>
              </div>
              <p style={{ color: '#475569', fontSize: 11, textAlign: 'center', marginTop: 2 }}>Tap any image to download it</p>
              {result.downloads.audio && (
                <a href={proxyUrl(result.downloads.audio, `${baseFilename}_audio`)} download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 20px', borderRadius: 12, background: '#0D1120', border: '1px solid #1A2240', color: '#00F5FF', fontWeight: 500, fontSize: 14, textDecoration: 'none', marginTop: 4 }}>
                  <IconMusic /> Download Background Audio (MP3)
                </a>
              )}
            </>
          ) : (
            /* ── VIDEO POST ── */
            <>
              <p style={{ color: '#475569', fontSize: 11, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Choose format</p>
              {result.downloads.videoHD && (
                <a href={proxyUrl(result.downloads.videoHD, `${baseFilename}_hd`)} download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 20px', borderRadius: 12, background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)', color: 'white', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                  <IconVideo /> Download HD Video (No Watermark)
                </a>
              )}
              {result.downloads.videoSD && (
                <a href={proxyUrl(result.downloads.videoSD, `${baseFilename}_sd`)} download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 20px', borderRadius: 12, background: '#0D1120', border: '1px solid #1A2240', color: '#94a3b8', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
                  <IconDownload /> Download SD Video
                </a>
              )}
              {result.downloads.audio && (
                <a href={proxyUrl(result.downloads.audio, `${baseFilename}_audio`)} download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 20px', borderRadius: 12, background: '#0D1120', border: '1px solid #1A2240', color: '#00F5FF', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
                  <IconMusic /> Download MP3 Audio
                </a>
              )}
            </>
          )}
        </div>

        {/* Bottom ad */}
        <div style={{ padding: '0 20px 20px' }}>
          <AdSlot style={{ height: 250, borderRadius: 10 }} />
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from{opacity:0}to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(30px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)} }
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
  const TITLE = 'TikTok Downloader - Download TikTok Videos Without Watermark | TikVault';
  const DESCRIPTION = 'TikVault is a free TikTok downloader. Download TikTok videos without watermark in HD MP4 or convert TikTok to MP3 audio. No login, no app install. Works on iPhone, Android & PC.';

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="tiktok downloader, download tiktok video without watermark, tiktok to mp4, tiktok mp3 downloader, save tiktok video, tiktok video downloader online, tiktok watermark remover, download tiktok no watermark, tiktok video download, tikvault" />
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
              <a href="#how-to" className="hover:text-white transition-colors">How to Download</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="/blog" className="hover:text-white transition-colors">Guides</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#FF2D7840] text-[#FF2D78] hidden sm:block">Free · No Watermark</span>
          </div>
        </header>

        {/* TOP AD */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-4">
          <AdSlot className="h-[90px] hidden md:flex" />
          <AdSlot className="h-[50px] flex md:hidden" />
        </div>

        {/* HERO */}
        <main className="relative z-10 max-w-3xl mx-auto px-4 pt-10 pb-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2240] bg-[#0D1120] text-xs font-mono text-slate-400 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00F5FF] inline-block animate-pulse-slow" />
            Free · No watermark · No login · Unlimited
          </div>

          {/* H1 — leading keyword, same as competitors */}
          <h1 className="font-mono font-bold text-3xl sm:text-5xl leading-tight mb-3">
            <span className="gradient-text">TikTok Downloader</span>
          </h1>
          <h2 className="text-white text-lg sm:text-2xl font-semibold mb-2">Download TikTok Videos Without Watermark</h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Save any TikTok video as <strong className="text-white">HD MP4 without watermark</strong>, or convert TikTok to MP3 audio. Free, instant, no account needed. Works on Android, iPhone, and PC.
          </p>

          {/* SEARCH BOX */}
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
            <p className="mt-2 text-xs text-slate-600 font-mono">Supports tiktok.com, vm.tiktok.com, vt.tiktok.com and short links</p>
          </form>

          {error && <div className="mt-4 p-4 rounded-xl bg-[#FF2D7810] border border-[#FF2D7840] text-[#FF2D78] text-sm">{error}</div>}
        </main>

        {/* MID AD */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 pb-8">
          <AdSlot className="h-[280px] max-w-sm mx-auto" />
        </div>

        {/* ── MAIN CONTENT SECTION ────────────────────────────────────────── */}
        <section className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-6 sm:p-8">

            <h2 className="font-mono font-bold text-xl sm:text-2xl text-white mb-4">
              TikTok Video Downloader — Free &amp; Without Watermark
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              TikVault is a free online TikTok downloader that lets you <strong className="text-white">download TikTok videos without watermark</strong> directly to your device. Whether you want to save a TikTok video as MP4 or convert TikTok to MP3 audio, TikVault handles it instantly — no software to install, no account to create, no registration required.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              Our TikTok video downloader works on all devices including Android phones, iPhones, iPads, Windows PCs, and Mac computers. Just copy the video link from TikTok, paste it in the box above, and download your watermark-free video in HD quality within seconds. The service is completely free with no limit on the number of downloads.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
              Unlike the built-in TikTok save feature, which adds a watermark to every downloaded video, TikVault removes the TikTok watermark and gives you a clean, high-quality MP4 file. This makes it the ideal tool for content creators, video editors, and anyone who wants to save TikTok videos for offline viewing, reposting, or archiving.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              TikVault supports all TikTok URL formats including standard links from tiktok.com, short links from vm.tiktok.com and vt.tiktok.com, and links copied directly from the TikTok mobile app. You do not need a TikTok account to use TikVault — simply paste any public TikTok video link and your download will be ready in seconds.
            </p>
          </div>
        </section>

        {/* ── HOW TO ───────────────────────────────────────────────────────── */}
        <section id="how-to" className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
          <h2 className="font-mono font-bold text-xl sm:text-2xl text-white mb-2 text-center">
            How to Download TikTok Videos Without Watermark
          </h2>
          <p className="text-center text-slate-500 text-sm mb-8">Three steps. Under 10 seconds.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '1', icon: '🔗', title: 'Copy the TikTok link', desc: 'Open TikTok on your phone or browser. Find the video you want to download without watermark. Tap the Share button on the right side of the video and select Copy Link. The video URL is now saved to your clipboard.' },
              { step: '2', icon: '📋', title: 'Paste the link into TikVault', desc: 'Open your browser and go to tikvault.app. Tap or click the input field at the top of the page, paste your copied TikTok video URL, and click the Download button. TikVault will process the link instantly.' },
              { step: '3', icon: '💾', title: 'Download your video or MP3', desc: 'A popup will appear showing the video details and download options. Choose HD Video for best quality, SD Video for a smaller file, or MP3 Audio to extract just the sound. Click your preferred option and the file saves directly to your device — completely free, no watermark, no TikTok logo.' },
            ].map((s) => (
              <div key={s.step} className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-5 hover:border-[#FF2D7840] transition-colors">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DEVICE GUIDES ─────────────────────────────────────────────────── */}
        <section className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            {/* Android */}
            <div className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-5">
              <div className="text-2xl mb-3">🤖</div>
              <h2 className="font-semibold text-white mb-3 text-sm">Download TikTok on Android</h2>
              <ol className="text-slate-500 text-xs leading-relaxed space-y-2 list-decimal list-inside">
                <li>Open TikTok and find your video</li>
                <li>Tap Share → Copy Link</li>
                <li>Open Chrome and go to tikvault.app</li>
                <li>Paste the link and tap Download</li>
                <li>The MP4 file saves to your Downloads folder</li>
              </ol>
            </div>

            {/* iPhone */}
            <div className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-5">
              <div className="text-2xl mb-3">🍎</div>
              <h2 className="font-semibold text-white mb-3 text-sm">Download TikTok on iPhone (iOS)</h2>
              <ol className="text-slate-500 text-xs leading-relaxed space-y-2 list-decimal list-inside">
                <li>Open TikTok and find your video</li>
                <li>Tap Share → Copy Link</li>
                <li>Open Safari and go to tikvault.app</li>
                <li>Paste the link and tap Download</li>
                <li>Tap the download icon to save to Photos</li>
              </ol>
            </div>

            {/* PC */}
            <div className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-5">
              <div className="text-2xl mb-3">💻</div>
              <h2 className="font-semibold text-white mb-3 text-sm">Download TikTok on PC or Mac</h2>
              <ol className="text-slate-500 text-xs leading-relaxed space-y-2 list-decimal list-inside">
                <li>Go to tiktok.com and find your video</li>
                <li>Copy the URL from the address bar</li>
                <li>Open tikvault.app in a new tab</li>
                <li>Paste the URL and click Download</li>
                <li>The video saves to your Downloads folder</li>
              </ol>
            </div>
          </div>
        </section>

        {/* MID AD */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-8">
          <AdSlot className="h-[90px] hidden md:flex" />
          <AdSlot className="h-[100px] flex md:hidden" />
        </div>

        {/* ── FEATURES ─────────────────────────────────────────────────────── */}
        <section id="features" className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
          <h2 className="font-mono font-bold text-xl sm:text-2xl text-white mb-2 text-center">
            Why Use TikVault to Download TikTok Videos?
          </h2>
          <p className="text-center text-slate-500 text-sm mb-8">The fastest free TikTok downloader online.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🚫', title: 'No Watermark', desc: 'Download TikTok videos without the TikTok watermark or logo. Clean MP4 files ready to share or repost.' },
              { icon: '🎬', title: 'HD Quality MP4', desc: 'Save TikTok videos in original HD resolution as MP4 format. No compression, no quality loss.' },
              { icon: '🎵', title: 'TikTok to MP3', desc: 'Convert TikTok videos to MP3 audio. Extract the sound from any TikTok and save it as a high-quality MP3 file.' },
              { icon: '📱', title: 'All Devices Supported', desc: 'TikTok downloader works on Android, iPhone, iPad, PC and Mac. No app install required.' },
              { icon: '⚡', title: 'Fast & Instant', desc: 'Download TikTok videos in seconds. No waiting, no queue, no signup required.' },
              { icon: '🔓', title: 'Always Free', desc: 'Our TikTok video downloader is completely free with no download limits and no registration.' },
            ].map((f) => (
              <div key={f.title} className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-5 hover:border-[#FF2D7840] transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white mb-1.5 text-sm">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MP4 & MP3 INFO SECTION ────────────────────────────────────────── */}
        <section className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-6">
              <h2 className="font-semibold text-white mb-3">TikTok to MP4 — HD Video Download</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                TikVault lets you download TikTok videos as MP4 in two quality options. The <strong className="text-white">HD version</strong> gives you the highest available resolution — perfect for re-editing, reposting, or archiving. The <strong className="text-white">SD version</strong> produces a smaller file size, ideal for sharing via messaging apps. Both are completely free, have no watermark, and download instantly to your device.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                MP4 is the most widely supported video format and plays on all devices, media players, and video editors. When you convert TikTok to MP4 using TikVault, the file is fully compatible with Windows, Mac, Android, iPhone, and any video editing software including CapCut, Premiere Pro, and iMovie.
              </p>
            </div>
            <div className="bg-[#0D1120] border border-[#1A2240] rounded-2xl p-6">
              <h2 className="font-semibold text-white mb-3">TikTok MP3 Downloader — Extract Audio Free</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Want just the audio from a TikTok video? Use TikVault's built-in <strong className="text-white">TikTok MP3 downloader</strong> to extract and save the sound as a high-quality MP3 file. This is perfect for saving trending TikTok sounds, background music, voiceovers, or podcast-style content.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                The TikTok to MP3 conversion is handled automatically — no extra steps or tools are needed. Simply paste your TikTok link, click Download, and select the MP3 Audio option in the popup. The audio file downloads directly to your device in seconds, completely free with no watermark or branding.
              </p>
            </div>
          </div>
        </section>

        {/* MID AD */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-8">
          <AdSlot className="h-[90px] hidden md:flex" />
          <AdSlot className="h-[100px] flex md:hidden" />
        </div>

        {/* ── DEVICE PAGES ────────────────────────────────────────────────────── */}
        <section className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
          <h2 className="font-mono font-bold text-xl sm:text-2xl text-white mb-2 text-center">Download by Device</h2>
          <p className="text-center text-slate-500 text-sm mb-8">Step-by-step guides for every platform.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { href: '/download-tiktok-on-iphone', icon: '🍎', label: 'iPhone' },
              { href: '/download-tiktok-on-android', icon: '📱', label: 'Android' },
              { href: '/download-tiktok-on-pc', icon: '💻', label: 'PC & Mac' },
              { href: '/tiktok-mp3-downloader', icon: '🎵', label: 'MP3 Audio' },
              { href: '/tiktok-slideshow-downloader', icon: '🖼️', label: 'Slideshows' },
            ].map((d) => (
              <a key={d.href} href={d.href} style={{ textDecoration: 'none' }}>
                <div className="h-full rounded-2xl p-4 border border-[#1A2240] bg-[#0D1120] hover:border-[#FF2D7850] transition-colors flex flex-col items-center gap-2 text-center">
                  <span style={{ fontSize: 28 }}>{d.icon}</span>
                  <p className="text-white text-sm font-semibold">{d.label}</p>
                  <p className="text-[#FF2D78] text-xs font-mono">Guide →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── GUIDES ─────────────────────────────────────────────────────────── */}
        <section className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
          <h2 className="font-mono font-bold text-xl sm:text-2xl text-white mb-2 text-center">Guides &amp; Tips</h2>
          <p className="text-center text-slate-500 text-sm mb-8">Learn how to get the most out of TikTok downloading.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/blog/how-to-download-tiktok-videos-without-watermark', tag: 'Guide', title: 'How to Download TikTok Videos Without Watermark', desc: 'Step-by-step for every device — iPhone, Android, PC and Mac.' },
              { href: '/blog/tiktok-hd-vs-sd-video-quality', tag: 'Tips', title: 'HD vs SD Downloads: Which Should You Choose?', desc: 'Resolution, file size, bitrate — what the difference actually means.' },
              { href: '/blog/how-to-download-tiktok-audio-mp3', tag: 'Tutorial', title: 'Save TikTok Audio as MP3', desc: 'How to extract sounds, songs and voiceovers from any TikTok video.' },
            ].map((g) => (
              <a key={g.href} href={g.href} style={{ textDecoration: 'none' }}>
                <div className="h-full rounded-2xl p-4 border border-[#1A2240] bg-[#0D1120] hover:border-[#FF2D7850] transition-colors flex flex-col gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#FF2D7830] text-[#FF2D78] bg-[#FF2D7810] self-start">{g.tag}</span>
                  <p className="text-white text-sm font-semibold leading-snug">{g.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{g.desc}</p>
                  <p className="text-[#FF2D78] text-xs font-mono mt-auto pt-1">Read →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section id="faq" className="relative z-10 max-w-4xl mx-auto px-4 pb-16">
          <h2 className="font-mono font-bold text-xl sm:text-2xl text-white mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-slate-500 text-sm mb-8">Everything about downloading TikTok videos.</p>
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-8">
          <AdSlot className="h-[90px] hidden md:flex" />
          <AdSlot className="h-[50px] flex md:hidden" />
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
                <a href="/blog" className="hover:text-white transition-colors">Guides</a>
                <a href="/about" className="hover:text-white transition-colors">About</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </nav>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1A2240] text-center">
              <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
                TikVault is an independent TikTok downloader tool and is not affiliated with, endorsed by, or associated with TikTok or ByteDance Ltd. Downloaded content is for personal use only. Users are responsible for ensuring they have permission to download any content.
              </p>
              <p className="text-xs text-slate-700 mt-3 font-mono">© {new Date().getFullYear()} TikVault — Free TikTok Video Downloader · All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
