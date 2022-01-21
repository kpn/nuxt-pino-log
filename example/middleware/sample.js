export default ({ $logger }) => {

  if ($logger) $logger.info("I should run for both")
  if (process.server && $logger) $logger.info('I explicitly want it to run only on the server, then I do the if')
  if (process.client && $logger) $logger.info('here in client middleware')

}
