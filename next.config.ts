import type { NextConfig } from "next";

const isDev = process.env.DEPLOY_ENV === "dev";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isDev && { basePath: "/dev", assetPrefix: "/dev" }),
};

export default nextConfig;
