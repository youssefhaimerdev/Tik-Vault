import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — TikVault</title>
        <meta name="description" content="Privacy Policy for TikVault - Learn how we handle your data." />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="min-h-screen" style={{ background: '#080B14' }}>
        {/* Header */}
        <header style={{ borderBottom: '1px solid #1A2240' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #FF2D78, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'monospace', fontWeight: 'bold', fontSize: 13 }}>TV</div>
              <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'white', fontSize: 18 }}>Tik<span style={{ color: '#FF2D78' }}>Vault</span></span>
            </a>
            <a href="/" style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none' }}>← Back to Home</a>
          </div>
        </header>

        {/* Content */}
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
          <h1 style={{ fontFamily: 'monospace', color: 'white', fontSize: 32, fontWeight: 'bold', marginBottom: 8 }}>Privacy Policy</h1>
          <p style={{ color: '#64748b', fontSize: 14, marginBottom: 40 }}>Last updated: January 1, 2026</p>

          {[
            {
              title: '1. Introduction',
              content: 'Welcome to TikVault ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit tikvault.app.',
            },
            {
              title: '2. Information We Collect',
              content: 'We do not require registration or login. We do not collect personal information such as your name, email address, or payment details. We may collect anonymous usage data such as pages visited, browser type, and device type through analytics tools (e.g. Google Analytics) to improve our service.',
            },
            {
              title: '3. How We Use Your Information',
              content: 'Any data we collect is used solely to improve the functionality and performance of TikVault. We do not sell, trade, or rent your information to third parties.',
            },
            {
              title: '4. Cookies',
              content: 'TikVault may use cookies to enhance your browsing experience. Cookies are small files stored on your device. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. If you do not accept cookies, some parts of our service may not function properly.',
            },
            {
              title: '5. Third-Party Advertising',
              content: 'We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google\'s Ads Settings at https://www.google.com/settings/ads.',
            },
            {
              title: '6. Third-Party Links',
              content: 'Our service may contain links to third-party websites. We have no control over the content and practices of those sites and are not responsible for their privacy policies.',
            },
            {
              title: '7. Content Disclaimer',
              content: 'TikVault does not store any videos or media files. Our service only retrieves publicly available download links from TikTok\'s CDN. Users are responsible for ensuring they have the right to download any content they access through our service.',
            },
            {
              title: '8. Children\'s Privacy',
              content: 'TikVault is not directed to children under the age of 13. We do not knowingly collect personal information from children.',
            },
            {
              title: '9. Changes to This Policy',
              content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.',
            },
            {
              title: '10. Contact Us',
              content: 'If you have any questions about this Privacy Policy, please contact us at: support@tikvault.app',
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: 32 }}>
              <h2 style={{ color: 'white', fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{section.title}</h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: 15 }}>{section.content}</p>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #1A2240', textAlign: 'center', padding: '24px', color: '#374151', fontSize: 13 }}>
          © {new Date().getFullYear()} TikVault · <a href="/terms" style={{ color: '#374151' }}>Terms of Use</a> · <a href="/privacy" style={{ color: '#374151' }}>Privacy Policy</a>
        </footer>
      </div>
    </>
  );
}
