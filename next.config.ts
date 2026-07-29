import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Render Static Site (publishes the `out/` folder)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
