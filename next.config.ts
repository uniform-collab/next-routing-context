import { withUniformConfig } from "@uniformdev/canvas-next-rsc-v2/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: "incremental",
  },
};

export default withUniformConfig(nextConfig);
