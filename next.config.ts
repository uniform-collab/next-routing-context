import { withUniformConfig } from "@uniformdev/canvas-next-rsc-v2/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withUniformConfig(nextConfig);
