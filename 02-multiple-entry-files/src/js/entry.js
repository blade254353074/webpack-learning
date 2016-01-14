var $ = require('jquery');

$(function() {
  $('#module1').on('click', function() {
    require.ensure([], function() {
      var module1 = require('./components/module1/script');
      module1();
    });
  });
  $('#module2').on('click', function() {
    require.ensure([], function() {
      var module2 = require('./components/module2/script');
      module2();
    });
  });
});
