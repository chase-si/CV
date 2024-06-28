/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // basePath: '/out',
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      }
    }
  }

}

export default nextConfig
