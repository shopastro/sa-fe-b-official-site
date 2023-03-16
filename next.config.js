const BFF_URL = process.env.bff_url

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.cdn.ishopastro.com']
  },
  transpilePackages: ['antd-mobile'],
  rewrites: async () => {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `${BFF_URL}/:path*`
        }
      ]
    }
  }
}
