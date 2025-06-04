import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true
}

export default withContentlayer(nextConfig)