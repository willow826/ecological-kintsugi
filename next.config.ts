import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "1";
const repositoryName = process.env.GITHUB_PAGES_REPO ?? "";
const basePath = isGitHubPages && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath,
        assetPrefix: basePath || undefined,
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
