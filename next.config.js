/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
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
