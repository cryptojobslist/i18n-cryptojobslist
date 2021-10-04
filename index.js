require('fs')
  .readdirSync('./locales/')
  .forEach(file => {
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
      let name = file.replace('.js', '')
      module.exports[name] = require('./locales/' + file)
    }
  })
