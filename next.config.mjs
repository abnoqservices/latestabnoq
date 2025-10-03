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
    domains: ['aapkiyojana.org'], // for backward compatibility
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
}

export default withBundleAnalyzer(nextConfig)
