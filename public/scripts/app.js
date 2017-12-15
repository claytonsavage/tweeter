$(function() {


  function createTweetElement(value){
    const $img = $('<img>').attr("src", value.user.avatars.regular).addClass("user-image");
    const $h2 = $('<h2>').text(value.user.name).addClass("username");
    const $h3 = $('<h3>').text(value.user.handle).addClass("handle");
    const $header = $('<header>').addClass("tweet-header").append($img, $h2, $h3);
    const $content = $('<p>').text(value.content.text).addClass("tweet-text");
    const dayInMs = 86400000;
    const minutesInMs = 60000;
    let footer;
    if ((Date.now() - value.created_at) < dayInMs) {
      $footer = $('<footer>').text((((Date.now() - value.created_at) / minutesInMs)).toFixed(0) + ' minutes ago').addClass("time-ago");
    } if ((Date.now() - value.created_at) > dayInMs) {
      $footer = $('<footer>').text(((Date.now() - value.created_at) / dayInMs).toFixed(0) + ' days ago').addClass("time-ago");
    }
    var $iconHeart = $('<i>').addClass('fa fa-heart').attr('aria-hidden', true);
    var $iconRetweet = $('<i>').addClass('fa fa-flag').attr('aria-hidden', true);
    var $iconFlag = $('<i>').addClass('fa fa-retweet').attr('aria-hidden', true);
    var $div = $('<div>').addClass("icon").append($iconRetweet, $iconFlag, $iconHeart);
    return $('<article>')
      .addClass("tweet-box")
      .append($header, $content, $footer, $div);
  }

  function renderTweets(tweets){
    $('#tweet-container').empty().append(tweets.map(createdTweet => createTweetElement(createdTweet)));
  }

  $('form').on('submit', function (event) {
    event.preventDefault();
    //validation
    const formText = ($('.textarea-new-tweet').val());
    const trimText = formText.trim();
    if (!trimText) {
      $('.infoForUser').replaceWith('<div class="error infoForUser" >tweet missing</div>');
      return;
    } if ( trimText.length > 140 ) {
      $('.infoForUser').replaceWith('<div class="error infoForUser" >too many characters</div>');
      return;
    }
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).serialize()
    }).done(function () {
      event.target.reset();
      $('.counter').text('140');
      $('.error').replaceWith('<div class="infoForUser"><div>');
      // update DOM after hearing back from server
      loadTweets();
    });
  });

  loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'JSON',
      success: function (morePostsJSON) {
        renderTweets(morePostsJSON.reverse());
      }
    });
  };
  loadTweets();

  $( ".toggleButton" ).click(function() {
    $( ".wrapper" ).slideToggle( 80, function() {
      $( ".textarea-new-tweet" ).focus();
    });
  });

});