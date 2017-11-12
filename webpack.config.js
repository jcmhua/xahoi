const webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true
  },
  entry:
    [
      'react-hot-loader/patch',
      './entry.js'
    ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    publicPath: "/"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()  ]
}
