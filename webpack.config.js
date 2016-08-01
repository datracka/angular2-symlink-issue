var webpack = require("webpack");
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

  entry: {
    main: "./src/main.ts", //main app entry point
  },
  'debug': true,
  'devtool': 'source-map',
  output: {
    path: __dirname,
    filename: "./app/js/bundle.js"
  },
  resolve: {
    fallback: [path.join(__dirname, 'node_modules')],
    root: [path.join(__dirname, 'node_modules')],
    modulesDirectories: ['node_modules'],
    extensions: ['' , '.js' , '.ts']
  },
  resolveLoaders: {
    fallback: [path.join(__dirname, 'node_modules')],
    root: [path.join(__dirname, 'node_modules')],
    modulesDirectories: ['node_modules'],
    extensions: ['' , '.js' , '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' , exclude: /node_modules/ },
      {test: /\.html$/, loader: 'html'}
    ]
  }
}