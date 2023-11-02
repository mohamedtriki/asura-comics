/** @type {import('next').NextConfig} */

const moduleExports = {
  staticPageGenerationTimeout: 180,
  output: 'standalone',
  productionBrowserSourceMaps: false,
  swcMinify: false,
  reactStrictMode: true,
  compress: false,
  images: {
    unoptimized: true
  }
};

module.exports = moduleExports;
