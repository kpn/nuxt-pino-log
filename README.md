# NUXT-PINTO-LOG

> Add pinoJS logs to nuxt


## Why pinoJS?

- browser and server support
- is fast
- easy to use

## Configuration

1. Following are the default configurations provided to the loggger:

```
defaults = {
    disabled: false,
    disableClientSide: false,
    disableServerSide: false,
    skipRequestMiddlewareHandler: false,
    skipErrorMiddlewareHandler: false,
    clientOptions: {
      browser: {
        asObject: true
      }
    }
  }
```

2. The above default configurations can be customized by passing options through `nuxt.config.js` file as following:

```
nuxtPinoLog: {
    // To disable all the logging
    disabled: true,

    // To disable client side loggging
    disableClientSide: true,

    // To disable server side logging
    disableServerSide: true,

    // Settings to determine if default handlers should be
    // registered for requests and errors respectively.
    // Set to `true` to skip request logging
    skipRequestMiddlewareHandler: true,
    // Set to `true` to skip error logging
    skipErrorMiddlewareHandler: true,

    clientOptions: {
        // configure pino client with the configrations from https://github.com/pinojs/pino/blob/master/docs/browser.md
    }
  },
```

3. One can pass pino options from https://github.com/pinojs/pino/blob/master/docs/api.md#options as following:

```
nuxtPinoLog: {
  serverOptions: {
      name: 'Nuxt Pino Logger', // this is an example
  },
}
```

4. One can pass pino-http options from https://github.com/pinojs/pino-http as following:

```
nuxtPinoLog: {
  pinoHttpOptions: {
    serializers: {
      res: (res) => ({
        statusCode: res.statusCode,
      }),
    }
  }
}
```

## Usage

1. In nuxt middleware

```
$logger.info('Logging in middleware')
```

2. In nuxt component, store and pages

```
this.$logger.info('Logging')
```

