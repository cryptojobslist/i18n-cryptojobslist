// This will be executed in the browser, compiled by webpack, hence no `fs` please.
module.exports = {
  en: require('./locales/en'),
  ru: require('./locales/ru'),
  de: require('./locales/de'),
  pt: require('./locales/pt'),
  es: require('./locales/es'),
  // Add your locale import here
}
