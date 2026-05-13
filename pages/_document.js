import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google AdSense — replace with your publisher ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RW2NVTJXD"></script>
         <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RW2NVTJXD');
          `}} />

        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'TikVault',
              url: 'https://tikvault.app',
              description: 'Free TikTok video downloader — save TikTok videos without watermark in HD MP4 and MP3 audio. No login required.',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'All',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
