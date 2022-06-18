/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['media-exp2.licdn.com'],
  }
}

module.exports = nextConfig
