const webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true
  },
  entry:{
    [
      'babel-polyfill',
      'react-hot-loader/patch',
      './App.js'
    ]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()  ]
}
