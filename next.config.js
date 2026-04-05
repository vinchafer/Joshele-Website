/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.designer.hoststar.ch',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
