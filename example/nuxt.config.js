const { resolve } = require('path')
const { redactDefault } = require('../')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('../') }],
  router: {
    // middleware: ['sample']
  },
  nuxtPinoLog: {
    serverOptions: {
      name: 'Logger',
      redact: redactDefault
    },
    pinoHttpOptions: {
      serializers: {
        res: res => ({
          statusCode: res.statusCode
        })
      }
    }
  }
}
