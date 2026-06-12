import Head from 'next/head';
import Link from 'next/link';

const SITE_URL = 'https://tikvault.app';

const articles = [
  {
    slug: 'tiktok-algorithm-explained',
    title: 'TikTok Algorithm Explained: What Actually Gets You More Views in 2026',
    description: 'A clear, honest breakdown of how TikTok's recommendation system works — what signals matter, what is mostly myth, and what to focus on.',
    date: 'May 20, 2026',
    readTime: '8 min read',
    tag: 'Creator Tips',
  },
  {
    slug: 'how-to-grow-tiktok-following',
    title: 'How to Grow Your TikTok Following: What Works in 2026',
    description: 'Practical strategies for building an audience from scratch — niche selection, content structure, consistency, and what most advice gets wrong.',
    date: 'May 22, 2026',
    readTime: '7 min read',
    tag: 'Growth',
  },
  {
    slug: 'tiktok-beginners-guide',
    title: 'TikTok for Beginners: A Complete Getting Started Guide (2026)',
    description: 'Everything you need to know to get started — account setup, understanding the FYP, creating your first video, and staying safe.',
    date: 'May 24, 2026',
    readTime: '9 min read',
    tag: 'Beginner',
  },
  {
    slug: 'how-to-download-tiktok-videos-without-watermark',
    title: 'How to Download TikTok Videos Without Watermark: The Complete Guide',
    description: 'A step-by-step guide to downloading TikTok videos without the floating watermark on any device — iPhone, Android, PC, and Mac.',
    date: 'May 10, 2026',
    readTime: '6 min read',
    tag: 'Guide',
  },
  {
    slug: 'tiktok-hd-vs-sd-video-quality',
    title: 'TikTok HD vs SD Downloads: What\'s the Difference and Which Should You Choose?',
    description: 'Not all TikTok downloads are equal. We break down the real difference between HD and SD quality, file sizes, and when each format makes sense.',
    date: 'May 12, 2026',
    readTime: '5 min read',
    tag: 'Tips',
  },
  {
    slug: 'how-to-download-tiktok-audio-mp3',
    title: 'How to Save TikTok Audio as MP3: Download Any Sound, Song or Voiceover',
    description: 'Want just the audio from a TikTok video? Here\'s how to extract and save any TikTok sound as a high-quality MP3 file in seconds.',
    date: 'May 14, 2026',
    readTime: '4 min read',
    tag: 'Tutorial',
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog & Guides — TikVault</title>
        <meta name="description" content="TikTok download guides, tips, and tutorials. Learn how to save TikTok videos without watermark, extract MP3 audio, and more." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Blog & Guides — TikVault" />
        <meta property="og:description" content="TikTok download guides, tips, and tutorials." />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080B14" />
      </Head>

      <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#080B14', color: '#e2e8f0' }}>
        <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #FF2D7808 0%, transparent 70%)', top: '-20%', left: '-10%' }} />

        {/* HEADER */}
        <header style={{ borderBottom: '1px solid #1A2240' }}>
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'monospace', fontWeight: 700, fontSize: 14 }}>TV</div>
              <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'white', fontSize: 18 }}>Tik<span style={{ color: '#FF2D78' }}>Vault</span></span>
            </a>
            <a href="/" style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'none', border: '1px solid #1A2240', padding: '6px 14px', borderRadius: 20 }}>
              ← Back to Downloader
            </a>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#FF2D78', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Blog &amp; Guides</div>
            <h1 style={{ fontSize: 32, fontWeight: 700, color: 'white', marginBottom: 8, fontFamily: 'monospace' }}>TikTok Tips &amp; Tutorials</h1>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.6 }}>Guides to help you get the most out of TikTok — downloading, converting, and more.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ background: '#0D1120', border: '1px solid #1A2240', borderRadius: 16, padding: '24px 28px', cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#FF2D7850'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#1A2240'}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontFamily: 'monospace', background: '#FF2D7815', color: '#FF2D78', padding: '3px 10px', borderRadius: 20, border: '1px solid #FF2D7830' }}>{article.tag}</span>
                    <span style={{ fontSize: 12, color: '#475569' }}>{article.date}</span>
                    <span style={{ fontSize: 12, color: '#475569' }}>·</span>
                    <span style={{ fontSize: 12, color: '#475569' }}>{article.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 8, lineHeight: 1.4 }}>{article.title}</h2>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, margin: 0 }}>{article.description}</p>
                  <div style={{ marginTop: 16, fontSize: 13, color: '#FF2D78', fontFamily: 'monospace' }}>Read article →</div>
                </article>
              </Link>
            ))}
          </div>
        </main>

        <footer style={{ borderTop: '1px solid #1A2240', marginTop: 40, padding: '24px 16px', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: 13 }}>© {new Date().getFullYear()} TikVault · <a href="/privacy" style={{ color: '#475569', textDecoration: 'none' }}>Privacy</a> · <a href="/terms" style={{ color: '#475569', textDecoration: 'none' }}>Terms</a></p>
        </footer>
      </div>
    </>
  );
}
