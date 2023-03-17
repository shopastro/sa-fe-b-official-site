const BFF_URL = process.env.bff_url
const isBeta = process.env.APP_ENV === 'dev'

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
          source: '/sw.js',
          destination: isBeta ? '/sw/beta.js' : '/sw/prod.js',
        },
        {
          source: '/api/:path*',
          destination: `${BFF_URL}/:path*`
        }
      ]
    }
  }
}
