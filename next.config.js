/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: false,
  },
  styleResources: {
    css: [
      "./src/app/styles/globals.css",
      "./src/app/styles/layout.module.css",
      "./src/app/components/header/header.module.css",
      "./src/app/components/getInTouch/getInTouch.module.css",
    ],
  },
};
module.exports = nextConfig;
