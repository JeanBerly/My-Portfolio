module.exports = {
    i18n: {
      defaultLocale: 'pt',
      locales: ['en', 'pt'],
    },
    localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
    fallbackLng: {
      default: ['pt'],
    },
    nonExplicitSupportedLngs: true,
}