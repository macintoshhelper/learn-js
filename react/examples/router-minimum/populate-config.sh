echo "const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './client');
const jsSourcePath = path.join(sourcePath, './js');
const buildPath = path.join(__dirname, './build');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
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
    filename: 'app-[hash].js',
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
" > webpack.config.js


echo "{
    \"presets\":[
        \"es2015\", \"react\"
    ]
}" > .babelrc
