const withTM = require('next-transpile-modules')(['antd-mobile'])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['media.cdn.ishopastro.com']
  },
  cssModules: true
})
