var path = require('path');

// var debug = process.env.NODE_ENV !== 'production';
var debug = false;

module.exports = {
  entry: './src/js/entry.js',
  output: {
    // 其中entry项是入口文件路径映射表，output项是对输出文件路径和名称的配置，占位符如[id]、[chunkhash]、[name]等分别代表编译后的模块id、chunk的hashnum值、chunk名等，可以任意组合决定最终输出的资源格式。
    path: path.resolve(debug ? '__build' : './assets'),
    filename: debug ? '[name].js' : 'js/[chunkhash:8].[name].min.js',
    chunkFilename: debug ? '[chunkhash:8].chunk.js' : 'js/[chunkhash:8].chunk.min.js',
    publicPath: debug ? '/__build/' : ''
  },
  resolve: {
    // 把node_modules路径添加到resolve search root列表里边，这样就可以直接load npm模块了
    root: ['./src', '../node_modules'],
    alias: {},
    extensions: ['', '.js', '.css', '.scss', '.png', '.jpg', '.html']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.scss$/i,
      loaders: ['style', 'css', 'sass']
    }, {
      // 对于css文件，默认情况下webpack会把css content内嵌到js里边，运行时会使用style标签内联。如果希望将css使用link标签引入，可以使用ExtractTextPlugin插件进行提取。
      test: /\.css$/i,
      loaders: ['style', 'css']
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'image?{bypassOnDebug: true, progressive:true, optimizationLevel: 3, pngquant:{quality: "65-80"}}',
        // 图片资源在加载时先压缩，然后当内容size小于~10KB时，会自动转成base64的方式内嵌进去，这样可以减少一个HTTP的请求。当图片大于10KB时，则会在img/下生成压缩后的图片，命名是[hash:8].[name].[ext]的形式。hash:8的意思是取图片内容hashsum值的前8位，这样做能够保证引用的是图片资源的最新修改版本，保证浏览器端能够即时更新。
        'url?limit=10000&name=img/[hash:8].[name].[ext]',
      ]
    }]
  }
};
