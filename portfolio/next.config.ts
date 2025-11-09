import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath for GitHub Pages deployment
  // For Netlify, leave it empty
  basePath: process.env.GITHUB_PAGES === 'true' ? '/my_portfolio' : '',
};

export default nextConfig;
