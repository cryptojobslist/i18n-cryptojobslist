const { expect } = require('chai')
const locales = require('../')

describe('overall node package test', () => {
  it('should be an object', async () => {
    expect(locales).to.be.an('object')
  })
  it('should contain en locale', async () => {
    expect(locales.en).to.be.an('object')
  })
})
