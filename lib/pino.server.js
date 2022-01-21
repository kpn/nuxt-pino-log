export default function (ctx, inject) {
  // Inject pino logger to the context as $logger
  inject('logger', process.serverLogger || {})
}
