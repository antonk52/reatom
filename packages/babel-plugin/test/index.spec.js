const pluginTester = require('babel-plugin-tester')

const plugin = require('../babel-plugin')

const path = require('path')

pluginTester({
  plugin,
  fixtures: path.join(__dirname, 'fixtures'),
})
