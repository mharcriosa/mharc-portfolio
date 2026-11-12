/** @type {import('next').NextConfig} */

// Set STATIC_EXPORT=1 to produce a plain static site in out/ (GitHub Pages).
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  transpilePackages: ["three"],
  ...(isStaticExport
    ? { output: "export", basePath: "/mharc-portfolio" }
    : {}),
};

export default nextConfig;
