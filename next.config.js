/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable API routes for static export
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // GitHub Pages specific configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/shopify-account-center' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/shopify-account-center' : '',
  // Skip API routes during build
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true
}

module.exports = nextConfig