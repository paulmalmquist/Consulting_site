/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const useStaticExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  // Keep server mode by default. Opt-in to static export with NEXT_EXPORT=true.
  output: useStaticExport ? 'export' : undefined,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
