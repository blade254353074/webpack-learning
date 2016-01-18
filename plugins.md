# Webpack Plugins Introduce
## config
### NormalModuleReplacementPlugin
```javascript
new webpack.NormalModuleReplacementPlugin(resourceRegExp, newResource)
```
将`resourceRegExp`匹配的模块名称 替换为`newResource`
如果`newResource`是相对路径，则会将匹配的模块路径替换为次路径的相对路径
如果`newResource`是个函数，则意味着重写参数result.request的值即可
```javascript
new webpackNormalModuleReplacementPlugin(/module-select/, function(result) {
  result.request = result.request + '-mock'
})
```
### ContextReplacementPlugin
```javascript
new webpack.ContextReplacementPlugin(
    resourceRegExp, 
    [newContentResource],
    [newContentRecursive],
    [newContentRegExp])
```
### IgnorePlugin
```javascript
new webpack.IgnorePlugin(resourceRegExp, [contextRegExp])
```
不想bundle的模块，用IgnorePlugin排除`resourceRegExp`匹配的模块
### PrefetchPlugin
```javascript
new webpack.PrefetchPlugin([context], request)
```
在build甚至是require之前预加载模块，可以提高性能
### ResolverPlugin
```javascript
new webpack.ResolverPlugin(plugins, [types])
```

