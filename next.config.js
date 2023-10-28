/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com', 'https://drive.google.com', 'picsum.photos'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = nextConfig
