import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Cấu hình các tên miền ảnh bên ngoài được phép sử dụng [cite: 626, 1718]
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Cho phép nguồn ảnh từ Picsum [cite: 1722]
      },
    ],
  },
};

export default nextConfig;
