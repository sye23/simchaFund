/* $ global*/
(function(){
  'use strict';

  let id = $('#donorId').text();
  let donorId = Number(id);

  $('#deleteDonor').click(function(){
    console.log('clicked')
    $.ajax({
      url:'/donor/'+donorId,
      type: 'DELETE',
      success:(function(data) {
          let url = data.replace(/['"]+/g, '');
          console.log(url);
          window.location.replace(url);
        })
      });
  });

}());
