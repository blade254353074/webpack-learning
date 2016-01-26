(function () {
  'use strict';

  var path = require('path');
  var http = require('http');
  var webpack = require("webpack");
  var WebpackDevServer = require("webpack-dev-server");
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpackConfig = require("./webpack.config.js");
  webpackConfig.entry.app.unshift('webpack/hot/dev-server');
  var webpackCompiler = webpack(webpackConfig);
  var hmr = require("webpack-dev-hmr");

  var port = 9000;
  var server = new WebpackDevServer(webpackCompiler, {
    contentBase: 'dist',
    proxy: {
      '*': 'http://localhost:3000'
    },
    hot: true, // Hot Module Replacement
    quiet: false,
    noInfo: false,
    watchOptions: {
      aggregateTimeout: 300,
    },
    publicPath: webpackConfig.output.publicPath,
    filename: webpackConfig.output.filename,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true },
  });

  server.listen(port, "localhost", function() {
    console.log("Server is listening on port ", port);
    // hmr.listen(server, webpackCompiler);
  });

  module.exports = server;
}());
