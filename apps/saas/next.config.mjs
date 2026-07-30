/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Vendored ReUI uses radix-ui typings that conflict with Next typecheck.
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    "@openpages/document-schema",
    "@openpages/blocks",
    "@openpages/uitripled",
    "@openpages/reui",
    "@openpages/renderer",
    "@openpages/seo-aeo",
    "@openpages/ai-core",
    "@openpages/media",
    "@openpages/codegen",
  ],
  experimental: {
    serverComponentsExternalPackages: ["sharp", "@prisma/client"],
  },
};

export default nextConfig;
