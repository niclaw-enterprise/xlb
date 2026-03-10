import type { NextConfig } from "next";

const deployEnv = process.env.DEPLOY_ENV; // "dev" | "gh-pages" | undefined (local)

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(deployEnv === "gh-pages" && {
    basePath: "/xlb",
    assetPrefix: "/xlb",
  }),
  ...(deployEnv === "dev" && {
    basePath: "/dev",
    assetPrefix: "/dev",
  }),
};

export default nextConfig;
