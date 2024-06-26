import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      { protocol: "https", hostname: "*" },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@tiptap/react"],
  },
};

export default nextConfig;
