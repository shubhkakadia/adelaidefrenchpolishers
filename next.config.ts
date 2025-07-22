import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    // Configure this to point to your cPanel public_html uploads folder
    PUBLIC_UPLOADS_DIR:
      process.env.NODE_ENV === "production"
        ? "/home/adad1504/public_html/media"  // Changed from "uploads" to "media" to match our implementation
        : path.join(process.cwd(), "public", "media"),
  },
  // Remove "output: export" to enable API routes
  // output: "export", 
  
  trailingSlash: true,
  images: {
    domains: ["adelaidefrenchpolishers.com.au", "localhost"],
    unoptimized: true, // Good for cPanel environments
  },
  experimental: {
    serverComponentsExternalPackages: ["uuid"],
  },

};

export default nextConfig;