import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'https://unsplash.com',
      "s3.us-west-2.amazonaws.com",
      'plus.unsplash.com',
      'images.unsplash.com'
    ],
  },
};

export default nextConfig;
