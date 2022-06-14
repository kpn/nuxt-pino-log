import pino from 'pino'

const options = <%= serialize(options) %> // eslint-disable-line
const logger = pino(options)

export default function (ctx, inject) {
  // Inject pino logger to the context as $logger
  inject('logger', logger || {})
}
