import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.beecrowd.com.br',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
