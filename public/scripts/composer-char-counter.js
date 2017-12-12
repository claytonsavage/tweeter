$( document ).ready(function() {
    $('.textarea-new-tweet').keyup(function (event) {
    var maxkeysPressed = 140;
      var length = $(this).val().length;
      var length = maxkeysPressed - length;
      var counter = $(this).parent().children('span.counter');
      counter.text(length);
      if (length < 0) {
        counter.css("color", 'red');
      } if (length >= 0) {
        counter.css("color", "black");
      }
    });


});