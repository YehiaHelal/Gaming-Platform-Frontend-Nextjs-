/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config;
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "next-ecommerce-s3.s3.eu-north-1.amazonaws.com",
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "gaming-platform-backend-node-git-master-enstein01.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
