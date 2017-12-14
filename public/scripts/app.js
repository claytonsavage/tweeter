$(function() {

  function renderTweets(tweets){
        $('#tweet-container').append(tweets.map(createdTweet => createTweetElement(createdTweet)));
  };


  function createTweetElement(value){
    var $img = $('<img>').attr("src",value.user.avatars.regular).addClass("user-image");
    var $h2 = $('<h2>').text(value.user.name).addClass("username");
    var $h3 = $('<h3>').text(value.user.handle).addClass("handle");
    var $header = $('<header>').addClass("tweet-header").append($img, $h2, $h3);
    var $content = $('<p>').text(value.content.text).addClass("tweet-text");
    var $footer = $('<footer>').text(((Date.now() - value.created_at)/86400000).toFixed (0) + ' days ago').addClass("time-ago");
    var $iconHeart = $('<i>').addClass('fa fa-heart').attr('aria-hidden', true);
    var $iconRetweet = $('<i>').addClass('fa fa-flag').attr('aria-hidden', true);
    var $iconFlag = $('<i>').addClass('fa fa-retweet').attr('aria-hidden', true);
    var $div = $('<div>').addClass("icon").append($iconRetweet, $iconFlag, $iconHeart);
    return $('<article>')
      .addClass("tweet-box")
      .append($header, $content, $footer, $div);
  }

  $('form').on('submit', function (event) {
    event.preventDefault();
    //validation
    if (data === "" || data === null) {
      console.log('error')
      return;
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).serialize()
    }).done(function () {
      event.target.reset();
      // update DOM after hearing back from server
    });
  })

  loadTweets = function() {
      $.ajax({
        url: '/tweets',
        method: 'GET',
        dataType: 'JSON',
        success: function (morePostsJSON) {
          renderTweets(morePostsJSON)
        }
      });
    };
loadTweets();


});