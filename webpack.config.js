const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const path = require('path')


module.exports = (env, argv) => ({
  plugins: [
    new SWPrecacheWebpackPlugin({  cacheId: 'my-pwa-vue-app',
    	filename: 'js/template-cachable-sw.js',
    	staticFileGlobs: ['public/**/*.{js,css}', '/'],
    	minify: true,
    	stripPrefix: '/',
    	dontCacheBustUrlsMatching: /\.\w{6}\./})

  ]
});
