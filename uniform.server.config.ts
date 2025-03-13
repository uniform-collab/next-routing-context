import { UniformServerConfig } from '@uniformdev/canvas-next-rsc-v2/config';

const config: UniformServerConfig = {
  defaultConsent: true,
  experimental: {
    quirkSerialization: true,
  },
};

export default config;
