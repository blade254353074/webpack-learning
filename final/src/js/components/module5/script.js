define(['jquery'], function($) {
  
  $.ajax({
    url: '/signin',
    type: 'POST',
    dataType: 'html',
    data: {
      username: 'admin888',
      password: 'admin888'
    },
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    console.log("error");
  });
});