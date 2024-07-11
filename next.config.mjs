/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  experimental: {
    taint: true,
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  // ...other config settings
};

export default nextConfig;
