const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 4659,
    open: true,
    historyApiFallback: true,
    hot: true
  },
  devtool: 'source-map'
})