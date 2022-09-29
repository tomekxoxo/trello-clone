/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  experimental: {
    concurrentFeatures: true,
  },
  images: {
    domains: ['images.pexels.com'],
  },
};

module.exports = nextConfig;
