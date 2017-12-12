$( document ).ready(function() {
    $('.textarea-new-tweet').keyup(function (event) {
    var maxkeysPressed = 140;
      var length = $(this).val().length;
      var length = maxkeysPressed - length;
      console.log(length);
      console.log($(this).parent().children('span.counter').text(length));
    });


});