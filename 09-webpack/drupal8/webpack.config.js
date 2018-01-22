// webpack.config.js
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './themes/mytheme'),
  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './themes/mytheme/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {browsers: ['ie >= 11']}]
            ]
          }
        }]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 2 } },
            'resolve-url-loader',
            'sass-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ]
}
