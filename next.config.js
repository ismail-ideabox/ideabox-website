/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  node: {
    fs: "empty",
  },
};
module.exports = nextConfig;
