import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Exclude test pages from build
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
    }
    
    // Ignore test-firebase directory
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /src\/app\/test-firebase/,
      loader: 'ignore-loader',
    });
    
    return config;
  },
};

export default nextConfig;
