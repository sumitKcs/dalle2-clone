/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
