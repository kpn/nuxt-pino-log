# NUXT-PINTO-LOG

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Add pinoJS logs to nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Why pinoJS?

- browser and server support
- is fast
- easy to use
- JSON structured logs

## Setup

1. Add `nuxt-pino-log` dependency to your project

```bash
yarn add nuxt-pino-log # or npm install nuxt-pino-log
```

2. Add `nuxt-pino-log` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-pino-log',

    // With options
    ['nuxt-pino-log', { /* module options */ }]
  ]
}
```

## Usage

1. In nuxt middleware

```js
$logger.info('Logging in middleware')
```

2. In nuxt component, store and pages

```js
this.$logger.info('Logging')
```

## Configuration

1. Following are the default configurations provided to the loggger:

```js
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

```js
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

```js
nuxtPinoLog: {
  serverOptions: {
      name: 'Nuxt Pino Logger', // this is an example
  },
}
```

4. One can pass pino-http options from https://github.com/pinojs/pino-http as following:

```js
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

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) KPN

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-pino-log/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-pino-log

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-pino-log.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-pino-log

[github-actions-ci-src]: https://github.com/kpn/kpn/nuxt-pino-log/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/kpn/kpn/nuxt-pino-log/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/kpn/nuxt-pino-log.svg
[codecov-href]: https://codecov.io/gh/kpn/nuxt-pino-log

[license-src]: https://img.shields.io/npm/l/nuxt-pino-log.svg
[license-href]: https://npmjs.com/package/nuxt-pino-log