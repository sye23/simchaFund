/* $ global*/
(function(){
  'use strict';

  let id = $('#simchaId').text();
  let simchaId = Number(id);

  $('#deleteSimcha').click(function(){
    $.ajax({
      url:'/simcha/'+simchaId,
      type: 'DELETE',
      success:(function(data) {
          let url = data.replace(/['"]+/g, '');
          console.log(url);
          window.location.replace(url);
        })
      });
  });

}());
