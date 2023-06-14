/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  images: {
    domains: ['images.pexels.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
