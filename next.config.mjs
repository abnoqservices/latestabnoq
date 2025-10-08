/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // Run only when needed
})

const nextConfig = {
  env: {
    PUBLIC_URL: "https://abnoq.com",
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aapkiyojana.org',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['aapkiyojana.org'], // backward compatibility
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  // ✅ Modern JavaScript settings
  experimental: {
    esmExternals: true,    // Use modern ES modules
  },

  swcMinify: true, // Ensure SWC minifier is active

  // ✅ Reduce legacy JS polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // optional optimization
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
}

export default withBundleAnalyzer(nextConfig)
