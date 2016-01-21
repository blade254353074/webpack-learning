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
在build甚至是require之前预加载模块，可以提高性能。

### ResolverPlugin
Apply a plugin (or array of plugins) to one or more resolvers (as specified in types).

plugins a plugin or an array of plugins that should be applied to the resolver(s).

types a resolver type or an array of resolver types (default: ["normal"], resolver types: normal, context, loader)

All plugins from enhanced-resolve are exported as properties for the ResolverPlugin.

Example:
```javascript
new webpack.ResolverPlugin(plugins, [types])
```

### ResolverPlugin.FileAppendPlugin
This plugin will append a path to the module directory to find a match, which can be useful if you have a module which has an incorrect “main” entry in its package.json/bower.json etc (e.g. "main": "Gruntfile.js"). You can use this plugin as a special case to load the correct file for this module. Example:
```javascript
new webpack.ResolverPlugin([
  new webpack.ResolverPlugin.FileAppendPlugin(['/dist/compiled-moduled.js'])
])
```

## output

### BannerPlugin
```javascript
new webpack.BannerPlugin(banner, options)
```
给每个生成的 chunk 文件头部添加注释信息。
`banner`是字符串，会用注释包裹
`options.raw` `true`，则不会注释banner
`options.entryOnly` `true`，只添加到入口chunks中

## optimize

### DedupePlugin
```javascript
new webpack.optimize.DedupePlugin()
```
查找相同或相似的文件，并在输出中删除重复部分。这会给入口chunk带来一些开销，但是可以有效地减少文件大小。

这个不会改变模块的语义。(不要期望用多个模块实例去解决问题，在重复删除后他们也不会成为一个实例。)?

不要在`watch`模式下使用。这个plugin只能在`production`环境下构建时使用

### LimitChunkCountPlugin
```javascript
new webpack.optimize.LimitChunkCountPlugin(options)
```
限制chunk数量为一个定值。Chunks会被合并，直到达到这个定值。

`options.maxChunks` (number) chunks的最大数量

`options.chunkOverhead` (number) 每个chunk的附加上限，单位：byte (default 10000, to reflect request delay)

`options.entryChunkMultiplicator` (number) 入口chunks的最大合并次数 (default 10, entry chunks are merged 10 times less likely)

### MinChunkSizePlugin
```javascript
new webpack.optimize.MinChunkSizePlugin(options)
```
合并文件大小小于这个最小值(in chars)的chunks，大小是个大概值。

`options.minChunkSize` (number) 小于这个数值的chunks会被合并

### OccurrenceOrderPlugin
```javascript
new webpack.optimize.OccurrenceOrderPlugin(preferEntry)
```
Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids. This make ids predictable, reduces to total file size and is recommended.

preferEntry (boolean) give entry chunks higher priority. This make entry chunks smaller but increases the overall size. (recommended)

### UglifyJsPlugin
```javascript
new webpack.optimize.UglifyJsPlugin([options])
```
压缩所有的chunks。Loaders会被转换为压缩模式。
你可以添加一个包含 <a href="https://github.com/mishoo/UglifyJS2#usage" target="_blank">UglifyJS 选项</a> 的对象参数：
```javascript
new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
```

其他选项：

- `sourceMap` 可以方便错误信息定位。会减慢编译速度 (default `true`)
- `test`, `include`, `exclude` RegExp or array of RegExps to filter processed files (default test: /\\.js($|\?)/i)
- 混淆变量名配置
    默认为`false`. 你可以配置插件来避免特定的变量被混淆:
    ```javascript
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports', 'require']
        }
    })
    ```

### ngAnnotatePlugin
`new ngAnnotatePlugin([options]);`
Runs the [ng-annotate](https://github.com/olov/ng-annotate) pre-minimizer to insert AngularJS dependency injection annotations.

### CommonsChunkPlugin
```javascript
new webpack.optimize.CommonsChunkPlugin(options)
```
- 公共chunk的块名。可以通过传递一个存在的chunk的名字参数来选中这个chunk。如果传递了一个字符串数组参数，则相当于多次调用这个插件。
    如果省略，并且`options.async`或`options.children`设置为所有被使用的块，否则使用`options.filename`作为块名
- `options.filename` (`string`): The filename template for the commons chunk. Can contain the same placeholder as `output.filename`. If omitted the original filename is not modified (usually `output.filename` or `output.chunkFilename`.
- `options.minChunks` (`number|Infinity|function(module, count) -> boolean`): The minimum number of chunks which need to contain a module before it’s moved into the commons chunk. The number must be greater than or equal 2 and lower than or equal to the number of chunks. Passing `Infinity` just creates the commons chunk, but moves no modules into it. By providing a function you can add custom logic. (Defaults to the number of chunks)
- `options.chunks` (`string[]`): Select the source chunks by chunk names. The chunk must be a child of the commons chunk. If omitted all entry chunks are selected.
- `options.children` (`boolean`): If `true` all children of the commons chunk are selected
- `options.async` (`boolean`): If `true` a new async commons chunk is created as child of `options.name` and sibling of `options.chunks`. It is loaded in parallel with `options.chunks`.
- `options.minSize` (`number`): Minimum size of all common module before a commons chunk is created.
