import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uhunt.onlinejudge.org',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
