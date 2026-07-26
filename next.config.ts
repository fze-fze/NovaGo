import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Hide the floating dev-mode badge. It never shipped to production anyway.
  devIndicators: false,
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
