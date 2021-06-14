const { expect } = require('chai')
const _ = require('lodash')
const locales = require('../')
const chalk = require('chalk')
const BASE_LOCALE = 'en'

function compare(defaultValue, translation, path = []) {
  if (typeof defaultValue === 'object') {
    for (let key in defaultValue) {
      compare(defaultValue[key], translation[key], [...path, key])
    }
  } else {
    // comparing i18n strings:
    if (typeof translation === 'undefined') {
      console.warn('Not translated', '\t', chalk.yellow(path.join('.')))
    } else if (translation === null) {
      console.warn('Not translated', '\t', chalk.yellow(path.join('.')))
    } else if (translation === defaultValue) {
      console.warn('Same values', '\t', chalk.yellow(path.join('.')), '\t', defaultValue)
    }
  }
}

describe('translation completeness test', () => {
  console.warn(chalk.yellow('TODO:'))
  for (let locale in _.omit(locales, BASE_LOCALE)) {
    console.warn(chalk.yellow('\n' + locale + ':'))
    compare(locales[BASE_LOCALE], locales[locale], [locale])
  }
})
