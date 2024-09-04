/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
