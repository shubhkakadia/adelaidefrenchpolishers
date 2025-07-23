import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    // Updated for Ubuntu VPS - store in public/media folder
    PUBLIC_UPLOADS_DIR:
      process.env.NODE_ENV === "production"
        ? path.join(process.cwd(), "public", "media")
        : path.join(process.cwd(), "public", "media"),
  },
  
  trailingSlash: true,
  images: {
    domains: ["adelaidefrenchpolishers.com.au", "localhost"],
    unoptimized: true, // Good for VPS environments
  },
  experimental: {
    serverComponentsExternalPackages: ["uuid"],
  },
};

export default nextConfig;