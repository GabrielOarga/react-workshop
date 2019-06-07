const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {EnvironmentPlugin, HotModuleReplacementPlugin} = require('webpack');

const {OUTPUT_PATH} = require('./constants');

module.exports = merge(require('./webpack.common.js'), {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: `${OUTPUT_PATH}/`,
    publicPath: `/`
  },
  optimization: {
    noEmitOnErrors: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new EnvironmentPlugin(['NODE_ENV', 'DEBUG']),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: OUTPUT_PATH,
    historyApiFallback: true,
    publicPath: '/',
    compress: true,
    open: 'Google Chrome',
    port: 8080,
    hot: true
  }
});