import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/cars",
        destination: "https://testing-api.ru-rating.ru/cars",
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ru-msk-dr3-1.store.cloud.mts.ru',
        port: '',
        pathname: '/store/images/**',
      },
    ],
  },
}

export default nextConfig