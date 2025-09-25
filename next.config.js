// next.config.js
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
