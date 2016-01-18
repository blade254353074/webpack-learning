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
});
