/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    typedRoutes: true,
    serverActions: true,
  },

  async redirects() {
    return [
      {
        source: '/vendor/new',
        destination: '/new',
        permanent: true,
      },
      {
        source: '/vendors',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
