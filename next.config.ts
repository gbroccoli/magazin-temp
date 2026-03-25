import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/magazin-temp",
  assetPrefix: "/magazin-temp",
};

export default nextConfig;
