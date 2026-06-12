import Head from 'next/head';
import { useState } from 'react';

const SITE_URL = 'https://tikvault.app';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    try {
      const res = await fetch('https://formspree.io/f/mzdqjywq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us — TikVault</title>
        <meta name="description" content="Get in touch with the TikVault team. Report a bug, ask a question, or send us a suggestion." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact TikVault" />
        <meta property="og:description" content="Get in touch with the TikVault team." />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
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

        <main className="max-w-xl mx-auto px-4 py-14">
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontFamily: 'monospace', background: '#FF2D7815', color: '#FF2D78', padding: '3px 10px', borderRadius: 20, border: '1px solid #FF2D7830' }}>Contact</span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 700, color: 'white', marginBottom: 8, fontFamily: 'monospace' }}>Get in Touch</h1>
          <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            Bug report, question, or suggestion — we read everything and respond within 48 hours.
          </p>

          {status === 'success' ? (
            <div style={{ background: '#0D1120', border: '1px solid #22c55e40', borderRadius: 16, padding: '32px 28px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
              <p style={{ color: '#22c55e', fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Message sent!</p>
              <p style={{ color: '#475569', fontSize: 14 }}>We'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Smith' },
                { name: 'email', label: 'Email address', type: 'email', placeholder: 'jane@example.com' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label htmlFor={name} style={{ fontSize: 13, color: '#94a3b8', fontFamily: 'monospace' }}>{label}</label>
                  <input
                    id={name} name={name} type={type} placeholder={placeholder} required
                    style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 10, padding: '12px 14px', color: 'white', fontSize: 14, outline: 'none', width: '100%' }}
                    onFocus={e => e.target.style.borderColor = '#FF2D7870'}
                    onBlur={e => e.target.style.borderColor = '#1A2240'}
                  />
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="subject" style={{ fontSize: 13, color: '#94a3b8', fontFamily: 'monospace' }}>Subject</label>
                <select id="subject" name="subject" required
                  style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 10, padding: '12px 14px', color: '#94a3b8', fontSize: 14, outline: 'none' }}>
                  <option value="">Select a topic...</option>
                  <option value="Bug report">Bug report</option>
                  <option value="Feature request">Feature request</option>
                  <option value="Content removal request">Content removal request</option>
                  <option value="General question">General question</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="message" style={{ fontSize: 13, color: '#94a3b8', fontFamily: 'monospace' }}>Message</label>
                <textarea
                  id="message" name="message" placeholder="Tell us what's on your mind..." required rows={5}
                  style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 10, padding: '12px 14px', color: 'white', fontSize: 14, outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                  onFocus={e => e.target.style.borderColor = '#FF2D7870'}
                  onBlur={e => e.target.style.borderColor = '#1A2240'}
                />
              </div>

              {status === 'error' && (
                <p style={{ color: '#ef4444', fontSize: 13, background: '#ef444415', border: '1px solid #ef444430', padding: '10px 14px', borderRadius: 8 }}>
                  Something went wrong. Please try again or email us directly at support@tikvault.app.
                </p>
              )}

              <button type="submit" disabled={status === 'sending'}
                style={{ background: status === 'sending' ? '#1A2240' : 'linear-gradient(135deg, #FF2D78, #8B5CF6)', color: 'white', border: 'none', borderRadius: 12, padding: '13px 24px', fontWeight: 600, fontSize: 15, cursor: status === 'sending' ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s' }}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { icon: '✉️', label: 'Email', value: 'support@tikvault.app' },
              { icon: '⏱', label: 'Response time', value: 'Within 48 hours' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontSize: 11, color: '#475569', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: '#94a3b8' }}>{value}</div>
              </div>
            ))}
          </div>
        </main>

        <footer style={{ borderTop: '1px solid #1A2240', marginTop: 40, padding: '24px 16px', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: 13 }}>© {new Date().getFullYear()} TikVault · <a href="/privacy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy</a> · <a href="/terms" style={{ color: '#475569', textDecoration: 'none' }}>Terms</a> · <a href="/about" style={{ color: '#475569', textDecoration: 'none' }}>About</a></p>
        </footer>
      </div>
    </>
  );
}
