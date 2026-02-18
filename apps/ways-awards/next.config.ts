import type { NextConfig } from "next";

const apiTarget = process.env.API_PROXY_TARGET ?? "http://localhost:3003";

const nextConfig: NextConfig = {
  transpilePackages: ["@waysconf/shared", "@waysconf/ui"],
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${apiTarget}/api/:path*` }];
  },
};

export default nextConfig;
