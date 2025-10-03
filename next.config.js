/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    PUBLIC_URL: ".",
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

export default nextConfig
