import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve .well-known files with correct content type (no .json extension)
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
