import type { NextConfig } from "next";

const deployEnv = process.env.DEPLOY_ENV; // "dev" | undefined (local/production)

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // dev preview only — production (xlb.hk) serves from root, no basePath needed
  ...(deployEnv === "dev" && {
    basePath: "/dev",
    assetPrefix: "/dev",
  }),
};

export default nextConfig;
