/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.youtube.com'],
  },
  basePath: isProd ? '/ypragyan' : '',
  assetPrefix: isProd ? '/ypragyan/' : '',

}

module.exports = nextConfig
