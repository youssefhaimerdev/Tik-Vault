import { useState, useRef, useEffect, useCallback } from 'react';

/* ── Icons ──────────────────────────────────────────────────────────────── */
const IconDownload = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>);
const IconMusic   = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>);
const IconVideo   = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>);
const IconSearch  = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>);
const IconPaste   = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>);
const IconClose   = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const IconPlay    = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
const IconHeart   = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
const IconComment = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>);

/* ── Helpers ─────────────────────────────────────────────────────────────── */
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

/* ── AdSlot ──────────────────────────────────────────────────────────────── */
function AdSlot({ className = '', style = {} }) {
  const wrapRef = useRef(null);
  const insRef  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (_) {}
    const ins = insRef.current;
    if (!ins) return;
    const mo = new MutationObserver(() => {
      if (ins.getAttribute('data-ad-status') === 'filled') { setVisible(true); mo.disconnect(); }
    });
    mo.observe(ins, { attributes: true, attributeFilter: ['data-ad-status'] });
    return () => mo.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ display: visible ? undefined : 'none', ...style }}>
      <ins ref={insRef} className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-3379075069129713"
        data-ad-format="auto" data-full-width-responsive="true" />
    </div>
  );
}

/* ── Download Modal ──────────────────────────────────────────────────────── */
function DownloadModal({ result, onClose }) {
  const baseFilename = (() => {
    const user = (result.author?.username || result.author?.nickname || 'tiktok').replace(/[^a-zA-Z0-9_]/g, '');
    return `@${user}_${result.id || Date.now()}`;
  })();

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!result) return null;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(8,11,20,0.88)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, animation: 'fadeIn 0.2s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 20, width: '100%', maxWidth: 480, maxHeight: '90vh', overflowY: 'auto', animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #1A2240' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00F5FF', display: 'inline-block' }} />
            <span style={{ color: '#00F5FF', fontSize: 12, fontFamily: 'monospace' }}>Video ready — choose format</span>
          </div>
          <button onClick={onClose} style={{ background: '#1A2240', border: 'none', borderRadius: 8, padding: 6, color: '#94a3b8', cursor: 'pointer', display: 'flex' }}><IconClose /></button>
        </div>

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

        <div style={{ padding: '0 20px 20px' }}>
          <AdSlot style={{ height: 250, borderRadius: 10 }} />
        </div>
      </div>
      <style>{`
        @keyframes fadeIn  { from{opacity:0}to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(30px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)} }
      `}</style>
    </div>
  );
}

/* ── Main Widget ─────────────────────────────────────────────────────────── */
export default function DownloadWidget({ placeholder = 'Paste TikTok link here…' }) {
  const [url,     setUrl]     = useState('');
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState(null);
  const [error,   setError]   = useState('');
  const inputRef = useRef(null);
  const closeModal = useCallback(() => setResult(null), []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res  = await fetch('/api/download', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: url.trim() }) });
      const data = await res.json();
      if (!res.ok || !data.success) setError(data.error || 'Failed to fetch video. Please check the URL and try again.');
      else setResult(data.data);
    } catch { setError('Network error. Please check your connection and try again.'); }
    finally  { setLoading(false); }
  }

  async function handlePaste() {
    try { const t = await navigator.clipboard.readText(); setUrl(t); inputRef.current?.focus(); }
    catch { inputRef.current?.focus(); }
  }

  return (
    <>
      {result && <DownloadModal result={result} onClose={closeModal} />}

      <div style={{ width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#0D1120', border: '1px solid #1A2240', borderRadius: 16, overflow: 'hidden', transition: 'border-color 0.2s, box-shadow 0.2s' }}
            onFocus={e => { e.currentTarget.style.borderColor = '#FF2D78'; e.currentTarget.style.boxShadow = '0 0 0 3px #FF2D7818'; }}
            onBlur={e =>  { e.currentTarget.style.borderColor = '#1A2240'; e.currentTarget.style.boxShadow = 'none'; }}>
            <input ref={inputRef} type="url" value={url} onChange={e => setUrl(e.target.value)}
              placeholder={placeholder} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
              style={{ flex: 1, background: 'transparent', padding: '16px 20px', color: 'white', fontSize: 15, outline: 'none', minWidth: 0 }} />
            {!url && (
              <button type="button" onClick={handlePaste}
                style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '0 8px', padding: '8px 12px', fontSize: 12, color: '#64748b', border: '1px solid #1A2240', borderRadius: 8, background: 'transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                <IconPaste /> Paste
              </button>
            )}
            {url && (
              <button type="button" onClick={() => { setUrl(''); setError(''); }}
                style={{ padding: 12, color: '#475569', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex' }}>
                <IconClose />
              </button>
            )}
            <button type="submit" disabled={loading || !url.trim()}
              style={{ margin: 6, padding: '12px 24px', borderRadius: 12, background: loading || !url.trim() ? '#1A2240' : 'linear-gradient(135deg, #FF2D78, #8B5CF6)', color: 'white', fontWeight: 700, fontSize: 15, border: 'none', cursor: loading || !url.trim() ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
              {loading
                ? <><span style={{ width: 16, height: 16, border: '2px solid #ffffff30', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} /> Fetching…</>
                : <><IconSearch /> Download</>}
            </button>
          </div>
          <p style={{ marginTop: 8, fontSize: 12, color: '#334155', fontFamily: 'monospace', textAlign: 'center' }}>
            Supports tiktok.com · vm.tiktok.com · vt.tiktok.com · short links
          </p>
        </form>

        {error && (
          <div style={{ marginTop: 12, padding: '12px 16px', borderRadius: 12, background: '#FF2D7810', border: '1px solid #FF2D7840', color: '#FF2D78', fontSize: 14 }}>
            {error}
          </div>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
