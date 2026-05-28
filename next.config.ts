import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static export can't use Next.js image optimization server.
    // Images are already small PNGs served directly.
    unoptimized: true,
  },
};

export default nextConfig;
