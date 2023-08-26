/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  distDir: "./dist",
  output: "export",
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 's3.amazonaws.com',
    //     port: '',
    //     pathname: '/my-bucket/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
