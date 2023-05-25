const { createProxyMiddleware } = require("http-proxy-middleware");

const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/recaptcha/:path*",
        destination: "https://www.google.com/recaptcha/api/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/recaptcha/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "application/x-www-form-urlencoded",
          },
        ],
      },
    ];
  },
  async middleware() {
    return [
      createProxyMiddleware("/api/recaptcha", {
        target: "https://www.google.com/recaptcha/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api/recaptcha": "",
        },
      }),
    ];
  },
};

module.exports = nextConfig;
