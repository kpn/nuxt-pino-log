# NUXT-PINO-LOG

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Add pinoJS logs to nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Why pinoJS?

- Server and browser support
- Fast
- Easy to use and setup
- JSON structured logs

## Setup

1. Add `nuxt-pino-log` dependency to your project

```bash
yarn add nuxt-pino-log
```

```bash
npm install nuxt-pino-log
```

2. Add `nuxt-pino-log` to the `modules` section of `nuxt.config.js`

```js
// nuxt.config.js
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
export default ({ $logger }) => {
  // This will be appear in the browser and server terminal
  $logger.info('Logging in middleware')
}
```

2. In nuxt component, store and pages

```js
this.$logger.info('Logging')
```

See the [example](./example) folder for more.

## Configuration

1. Following are the default configurations provided to the logger:

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
    },
    serverOptions: {
      // configure pino server logger with the configrations from https://github.com/pinojs/pino/blob/master/docs/browser.md
    },
    // configure `pino-http`, see more https://github.com/pinojs/pino-http
    pinoHttpOptions: {
      serializers: {
        res: (res) => ({
          statusCode: res.statusCode,
        }),
      }
    }
  },
```

## Headers redaction

You may want to redact some headers, that you don't want to appear in the logs.
`nuxt-pino-log` provides a default list that you can use and even extend.

Example:

```js
// nuxt.config.js
const { redactDefault } = require("nuxt-pino-log");

module.exports = {
  nuxtPinoLog: {
    serverOptions: {
      name: "Logger",
      redact: redactDefault,
    }
  }
}
```

## Pretty logs

Because the logs are json, during development you may want to make them prettier and
more developer friendly. You can use `pino-pretty` for that.

```bash
yarn add --dev pino-pretty
```

Configure your dev in your `package.json`

```js
// package.json
{
  "scripts": {
    "dev": "nuxt example | pino-pretty"
  }
}
```

## Contributing

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

[license-src]: https://img.shields.io/npm/l/nuxt-pino-log.svg
[license-href]: https://npmjs.com/package/nuxt-pino-log
