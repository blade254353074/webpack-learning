define(['jquery', './style'], function($) {
  console.log($);
  $('body').append($('<button>按钮</button>'));
  return {
    name: 'module233'
  };
});
