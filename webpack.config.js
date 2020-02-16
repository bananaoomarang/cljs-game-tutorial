const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'resources/public/dist'),
    filename: 'index.bundle.js'
  }
}
