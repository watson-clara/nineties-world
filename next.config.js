/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // This is to handle the canvas element used by PixiJS
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    // Suppress warnings about missing SWC binaries
    config.infrastructureLogging = {
      level: 'error',
    };
    
    return config;
  },
  // Remove experimental features that are causing warnings
  experimental: {
    // Remove swcPlugins to avoid the experimental feature warning
  },
}

module.exports = nextConfig 