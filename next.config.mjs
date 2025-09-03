/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thesamikhsya.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "thesamikhsya.com",
    ],
  },
};

export default nextConfig;
