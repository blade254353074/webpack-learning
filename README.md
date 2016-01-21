# Webpack Learning
This repo is a collection of simple demos of Webpack.

## Links
- [Webpack 入门](http://segmentfault.com/a/1190000002551952)
- [Webpack 最简单的教程 - 阮一峰](https://github.com/ruanyf/webpack-demos)
- [Webpack 中文指南](https://zhaoda.gitbooks.io/webpack/content/)
- [webpack 使用教程](https://www.zfanw.com/blog/webpack-tutorial.html)
- [Webpack 常用功能介绍](http://segmentfault.com/a/1190000004172052)
- [如何写一个webpack插件（一）](https://github.com/lcxfs1991/blog/issues/1)
- [webpack使用优化](https://github.com/lcxfs1991/blog/issues/2)
- [基于webpack搭建前端工程解决方案探索](http://segmentfault.com/a/1190000003499526)

## Documents
- [Webpack CLI 文档](http://webpack.github.io/docs/cli.html)
    + Development `webpack -d` === `webpack --debug --devtool source-map --output-pathinfo`
    + Production `webpack -p` === `webpack --optimize-minimize --optimize-occurence-order`
    + Watch mode `webpack --watch`
- [Webpack Config 文档](http://webpack.github.io/docs/configuration.html)

## How to use
First, install Webpack and webpack-dev-server globally.
```bash
$ npm i -g webpack webpack-dev-server
```
Then, clone the repo and install the dependencies.
```bash
$ git clone https://github.com/blade254353074/webpack-learning.git
$ cd webpack-learning
$ npm install
```
Now, play with the source files under the repo's demo* directories.
```bash
$ cd demo*
$ webpack-dev-server
```
open [http://localhost:8080/webpack-dev-server/bundle](http://localhost:8080/webpack-dev-server/bundle) in browser to watch auto update

## final
```bash
$ cd final
# for production
$ webpack -d
# for development
$ node app.js
```
then open <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a>
