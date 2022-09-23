/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
    domains: ['media.cdn.ishopastro.com'],
  },
  cssModules: true,
}
