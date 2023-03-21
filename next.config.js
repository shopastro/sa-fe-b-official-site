const isBeta = process.env.APP_ENV === 'dev'
const CHAT_URL = `https://chat.beluga.${isBeta ? 'beta.' : ''}ishopastro.com/`
const WEBHOOK_URL = `https://webhook.${isBeta ? 'beta.' : ''}ishopastro.com`

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
          source: '/api/beluga-chat/:path*',
          destination: `${CHAT_URL}/:path*`
        },
        {
          source: '/api/:path*',
          destination: `${WEBHOOK_URL}/:path*`
        },
      ]
    }
  }
}
