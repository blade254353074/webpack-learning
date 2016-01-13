module.exports = {
  entry: "./assets/js/entry.js",
  output: {
    path: __dirname + '/assets/js',
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }, {
      test: /\.css$/,
      loader: ["style", "css"]
    }]
  }
};
