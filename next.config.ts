/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disables Turbopack
  },
  images: {
    domains: [
      'assets.coingecko.com',
      'cdn.reown.com',
      'reown.com',
      'raw.githubusercontent.com',
      'images.unsplash.com',
      'i.imgur.com',
      'cdn.pixabay.com',
      'images.pexels.com'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint during builds (e.g., on Vercel)
  },
};

module.exports = nextConfig;
