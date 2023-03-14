/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/api': ['node_modules/**/compressjs*/**/*']
    }
  }
};
