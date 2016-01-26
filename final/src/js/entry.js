var $ = require('jquery');

$(function() {
  $('#module1').on('click', function() {
    require.ensure([], function(require) {
      var module1 = require('./components/module1/script');
      module1();
    });
  });
  $('#module2').on('click', function() {
    require.ensure([], function(require) {
      var module2 = require('./components/module2/script');
      module2();
    });
  });
  $('#module3').on('click', function() {
    require(['./components/module3/script'], function(module3) {
      console.log(module3);
    });
  });

  // 在entry中 定义模块会直接运行模块的factory函数
  /*define('foo', ['jquery', './components/module4/style'], function($) {
    console.log($);
    return {
      module: 'foo'
    };
  });*/

  $('#module4').on('click', function() {
    define('foo', ['jquery', './components/module4/style'], function($) {
      console.log($);
      return {
        module: 'foo'
      };
    });
    require(['foo'], function(foo) {
      console.log(foo);
    });
  });

  $('#module5').on('click', function(event) {
    event.preventDefault();
    require(['./components/module5/script'], function() {

    })
  });
});
