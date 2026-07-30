/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@openpages/document-schema",
    "@openpages/blocks",
    "@openpages/uitripled",
    "@openpages/reui",
    "@openpages/renderer",
    "@openpages/seo-aeo",
  ],
};

export default nextConfig;
