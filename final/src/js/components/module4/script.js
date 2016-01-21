define('foo', ['jquery', './style'], function($) {
  console.log($);
  return {
    module: 'foo'
  };
});
