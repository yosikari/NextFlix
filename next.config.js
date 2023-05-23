const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'assets.nflxext.com']
  },
  async rewrites() {
    return [
      {
        source: '/google59fe515b0944de80.html',
        destination: '/google59fe515b0944de80',
      },
    ];
  },
})
