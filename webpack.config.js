const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app-client.js',
  },
  output: {
    path: path.resolve(__dirname, 'src', 'static'),
    filename: './js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1} },
            'postcss-loader'
          ],
        }),
      },
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/[name].bundle.css',
      allChunks: true,
    })
  ],
};