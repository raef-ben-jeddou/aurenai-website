import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static hosting
  output: 'export',
  
  // Appends a trailing slash to URLs (e.g., /blog/ becomes /blog/index.html)
  // Highly recommended for strict static file hosting routing
  trailingSlash: true,
  
  images: {
    // Required because Next.js default image optimization relies on a Node.js server.
    // GitHub Pages cannot run the image optimization API.
    unoptimized: true,
  },
  
  // Optional but recommended: strict mode catches React anti-patterns early
  reactStrictMode: true,
};

export default nextConfig;