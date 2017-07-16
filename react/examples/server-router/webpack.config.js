const path = require('path');
const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const jsSourcePath = path.join(sourcePath, './client-js');
const buildPath = path.join(__dirname, './public/build');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  // new HtmlWebpackPlugin({
  //   template: path.join(sourcePath, 'index.html'),
  //   path: buildPath,
  //   filename: 'index.html',
  // }),
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
];


module.exports = {
  entry: [
    'babel-polyfill',
    path.join(jsSourcePath, 'index.js'),
  ],
  output: {
    path: buildPath,
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
    // filename: 'app-[hash].js',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
  },
  module: {
    rules,
  },
  plugins,
};
