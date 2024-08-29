// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude the specified modules from the client-side bundle
      config.externals = [
        ...(config.externals || []),
        "pino-pretty",
        "lokijs",
        "encoding",
      ];
    }
    return config;
  },
};

export default nextConfig;
