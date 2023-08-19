/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  distDir: "./dist",
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
