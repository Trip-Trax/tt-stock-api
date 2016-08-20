const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

// Config related.
const entryFile = path.join(__dirname, '../', 'source', 'index.js');
const outputPath = path.join(__dirname, '../', 'public');
const fileName = 'build.js';

module.exports = {
  entry: entryFile,
  output: {
    path: outputPath,
    filename: fileName,
    libraryTarget: 'umd',
    library: 'TTStockAPI'
  },
  externals: [nodeExternals()],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    }]
  }
};
