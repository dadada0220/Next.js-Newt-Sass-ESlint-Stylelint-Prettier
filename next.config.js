/**
 *  @type {import('next').NextConfig}
 */

const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 画像読み込みを許可するドメイン
    domains: ['storage.googleapis.com'],
  },
  // import xxx from '@/components/xxx' で読み込めるように
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config;
  },
}

module.exports = nextConfig
