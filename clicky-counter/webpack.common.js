const CleanWebpackPlugin = require('clean-webpack-plugin');

const {SRC_PATH} = require('./constants');

module.exports = {
  entry: [
    '@babel/polyfill',
    `${SRC_PATH}/index.js`
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  output: {
    filename: 'app.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
