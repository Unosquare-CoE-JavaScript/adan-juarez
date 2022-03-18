const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 2506,
    hot: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css)$/,
        use: [
        
            "style-loader",
             "css-loader",            
        ]
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
  },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader',
      },
  },
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/public/index.html' }), new MiniCssExtractPlugin()],
} 