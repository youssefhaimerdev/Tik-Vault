/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['p16-sign-va.tiktokcdn.com', 'p19-sign.tiktokcdn-us.com', 'p77-sign-va.tiktokcdn.com', 'www.tikwm.com'],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect old Vercel deployment domain to real domain (fixes duplicate content)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tik-vault.vercel.app' }],
        destination: 'https://tikvault.app/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
