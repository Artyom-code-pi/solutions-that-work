/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is fully static, so it deploys anywhere (Vercel, Netlify, etc.).
  // Set STATIC_EXPORT=1 to produce a plain HTML export in /out.
  output: process.env.STATIC_EXPORT ? "export" : undefined,
  images: { unoptimized: true },
  poweredByHeader: false,
};
export default nextConfig;
