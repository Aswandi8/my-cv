import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/my-cv",
  assetPrefix: "/my-cv/",
  images: {
    unoptimized: true, // ⚠️ ini disable Image Optimization
  },
};

export default nextConfig;
