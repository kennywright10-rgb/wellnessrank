/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Vercel — city pages generated at build time
  // Switch to 'standalone' if you add API routes that need server runtime
  output: undefined,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect old .html URLs if any exist
      {
        source: '/:city.html',
        destination: '/:city',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
