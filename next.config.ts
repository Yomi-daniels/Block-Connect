import { Images } from "lucide-react";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,  // disables Turbopack
  },
  Images: {
    domains: ['assets.coingecko.com', 'cdn.reown.com', 'reown.com', 'raw.githubusercontent.com', 'images.unsplash.com', 'i.imgur.com', 'cdn.pixabay.com', 'images.pexels.com'],
  }
};

module.exports = nextConfig;
