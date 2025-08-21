/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: { unoptimized: true }, 
  basePath: isProd ? '/ypragyan' : '',
  assetPrefix: isProd ? '/ypragyan/' : '',

}

module.exports = nextConfig
