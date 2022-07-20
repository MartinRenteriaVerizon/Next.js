const { i18n } = require('./next.config')

module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL'],
        defaultLocale: 'en-US',
      },
  }
  