import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // STORE API KEY
    API_KEY: process.env.API_KEY,
    // SHIPPING FREE LIMIT
    MIN_AMOUNT_FOR_FREE_SHIPPING: process.env.MIN_AMOUNT_FOR_FREE_SHIPPING,
    // BACKEND URL
    BACKEND: process.env.BACKEND,
    // BACKBLAZE
    R2_PUBLIC_URL: process.env.R2_PUBLIC_URL,
    // FRONTEND URL
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    // AUTHENTICATION
    AUTH_TOKEN: process.env.AUTH_TOKEN,
    // COMPANY NAME
    STORE_NAME: process.env.STORE_NAME,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
