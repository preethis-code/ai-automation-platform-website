const repoName = "ai-automation-platform-website";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  basePath:
    process.env.NODE_ENV === "production" ? `/${repoName}` : "",

  assetPrefix:
    process.env.NODE_ENV === "production" ? `/${repoName}/` : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
