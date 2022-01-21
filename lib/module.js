import deepmerge from 'lodash.merge'
import pino from 'pino'
import pinoHttp from 'pino-http'
import { resolve } from 'path'

const redactDefault = [
  'req.headers.cookie',
  'req.headers.authorization',
  'password',
  'userId',
  'email',
  'emailAddress',
  'address.*',
  'details.user.*',
]

async function PinoLog(moduleOptions) {
  const defaults = {
    disabled: process.env.PINO_DISABLED || false,
    disableClientSide: process.env.PINO_DISABLE_CLIENT_SIDE || false,
    disableServerSide: process.env.PINO_DISABLE_SERVER_SIDE || false,
    config: {
      environment: this.options.dev ? 'development' : 'production',
    },
    skipRequestMiddlewareHandler: false,
    skipErrorMiddlewareHandler: false,
    clientOptions: {
      browser: {
        asObject: true
      }
    }
  }

  const options = deepmerge({}, defaults, moduleOptions, this.options['nuxtPinoLog'])

  const pinoServerOptionsFromConfig = this.options.nuxtPinoLog?.serverOptions || {}
  const logger = pino(pinoServerOptionsFromConfig)

  const pinoHttpOptionsfromConfig = this.options.nuxtPinoLog?.pinoHttpOptions || {}
  const pinoLoggerOptions = {logger, ...pinoHttpOptionsfromConfig}
  const loggerHttp = pinoHttp(pinoLoggerOptions)


  if (!options.disabled && !options.disableServerSide) {
    process.serverLogger = logger
    this.addPlugin({
      src: resolve(__dirname, 'pino.server.js'),
      fileName: 'pino.server.js',
      mode: 'server',
    })
  }

  if (!options.disabled && !options.disableClientSide) {
    const clientOptionsFromConfig = this.options.nuxtPinoLog?.clientOptions || {}
    let clientOptions = deepmerge({}, defaults.clientOptions, clientOptionsFromConfig)
    this.addPlugin({
      src: resolve(__dirname, 'pino.client.js'),
      fileName: 'pino.client.js',
      mode: 'client',
      options: clientOptions,
    })
  }

  if (!options.disabled && !options.skipRequestMiddlewareHandler) {
    this.nuxt.hook('render:setupMiddleware', (app) => {
      app.use((req, res, next) => {
        loggerHttp(req, res)
        next()
      })
    })
  }

  if (!options.disabled && !options.skipErrorMiddlewareHandler) {
    this.nuxt.hook('render:errorMiddleware', (app) => {
      app.use((err, req, res, next) => {
        logger.error(err)
        next()
      })
    })
  }
}

export {redactDefault}
export default PinoLog


module.exports.meta = require('./package.json')
