/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com', 'https://drive.google.com', 'picsum.photos'],
  },
}

module.exports = nextConfig
