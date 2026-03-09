import type { NextConfig } from "next";

const isProd = process.env.DEPLOY_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isProd ? {} : { basePath: "/dev", assetPrefix: "/dev" }),
};

export default nextConfig;
