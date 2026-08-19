import type { NextConfig } from "next"

const repoName = "makerweb"
const isGithubPages = process.env.GITHUB_PAGES === "true"
const basePath = isGithubPages ? `/${repoName}` : ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  agentRules: false,
}

export default nextConfig
