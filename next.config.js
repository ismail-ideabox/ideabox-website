/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    scrollRestoration: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://ideabox.technology",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
