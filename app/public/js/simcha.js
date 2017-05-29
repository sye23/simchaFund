/* $ global*/
(function(){
  'use strict';

  let id = $('#simchaId').text();
  let simchaId = Number(id);



  $('#deleteSimchaModal').click(function(){
    $('.deleteModal').show();
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
    $('#modalNoButton').click(function(){
      $('.deleteModal').hide();
    })
  });


}());
