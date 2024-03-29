/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: /\.[jt]sx?$ /,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
};
