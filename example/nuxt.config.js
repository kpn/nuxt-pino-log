const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    { handler: require('../') }
  ],
  router: {
    middleware: ['sample'],
  },
  nuxtPinoLog: {
    serverOptions:{
      name: 'Logger',
    },
    pinoHttpOptions: {
      serializers: {
        res: (res) => ({
          statusCode: res.statusCode,
        }),
      }
    },
  },
}
