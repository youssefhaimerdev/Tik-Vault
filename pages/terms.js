import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use — TikVault</title>
        <meta name="description" content="Terms of Use for TikVault." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://tikvault.app/terms" />
      </Head>
      <div className="min-h-screen" style={{ background: '#080B14' }}>
        <header style={{ borderBottom: '1px solid #1A2240' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'monospace', fontWeight: 'bold', fontSize: 13 }}>TV</div>
              <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'white', fontSize: 18 }}>Tik<span style={{ color: '#FF2D78' }}>Vault</span></span>
            </a>
            <a href="/" style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none' }}>← Back to Home</a>
          </div>
        </header>
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
          <h1 style={{ fontFamily: 'monospace', color: 'white', fontSize: 32, fontWeight: 'bold', marginBottom: 8 }}>Terms of Use</h1>
          <p style={{ color: '#64748b', fontSize: 14, marginBottom: 40 }}>Last updated: May 8, 2026</p>
          {[
            { title: '1. Acceptance of Terms', content: 'By accessing and using TikVault (tikvault.app), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our service.' },
            { title: '2. Description of Service', content: "TikVault is a free online tool that allows users to download publicly available TikTok videos. The service retrieves video links directly from TikTok's public CDN. We do not host, store, or distribute any video content on our servers." },
            { title: '3. User Responsibilities', content: "You are solely responsible for how you use the content downloaded through TikVault. You must ensure that you have the necessary permissions from the original content creator before downloading any video. Downloading content for personal use only is permitted. Redistribution, commercial use, or republishing of downloaded content without the creator's consent is strictly prohibited." },
            { title: '4. Intellectual Property', content: "All content available through TikTok belongs to its respective creators and is subject to TikTok's Terms of Service. TikVault does not claim ownership of any downloaded content. The TikVault brand, logo, and website design are our intellectual property." },
            { title: '5. Prohibited Uses', content: 'You may not use TikVault to download content for commercial redistribution, to violate any applicable laws or regulations, to infringe on the intellectual property rights of others, or to harass, harm, or stalk any individual.' },
            { title: '6. Disclaimer of Warranties', content: 'TikVault is provided "as is" without any warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or that downloaded files will meet your requirements. We reserve the right to modify or discontinue the service at any time without notice.' },
            { title: '7. Limitation of Liability', content: 'TikVault shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our service.' },
            { title: '8. Third-Party Services', content: 'Our service uses third-party APIs and services to function. We are not responsible for the availability or accuracy of these third-party services.' },
            { title: '9. Changes to Terms', content: 'We reserve the right to modify these Terms of Use at any time. Continued use of TikVault after any changes constitutes your acceptance of the new terms.' },
            { title: '10. Contact', content: 'For any questions regarding these Terms of Use, please contact us at: support@tikvault.app' },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: 32 }}>
              <h2 style={{ color: 'white', fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{section.title}</h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: 15 }}>{section.content}</p>
            </div>
          ))}
        </main>
        <footer style={{ borderTop: '1px solid #1A2240', textAlign: 'center', padding: '24px', color: '#374151', fontSize: 13 }}>
          © {new Date().getFullYear()} TikVault · <a href="/terms" style={{ color: '#374151' }}>Terms of Use</a> · <a href="/privacy" style={{ color: '#374151' }}>Privacy Policy</a>
        </footer>
      </div>
    </>
  );
}
