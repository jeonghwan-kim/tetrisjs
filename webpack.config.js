const path = require('path');
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000
  }
}
