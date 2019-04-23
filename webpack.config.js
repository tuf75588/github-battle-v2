const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const config = {
  entry: './app/index.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new CopyPlugin([{ from: '_redirects' }])
  ],
  devServer: {
    historyApiFallback: true
  }
};
module.exports = config;
