const path = require('path')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const APP_DIR = resolve(__dirname, 'src')

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [new HtmlWebpackPlugin({
    inject: 'body',
    template: `${APP_DIR}/index.html`
  })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
