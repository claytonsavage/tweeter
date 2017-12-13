$(function() {
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

  function renderTweets(tweets){
    for (var i in tweets) {
      var createdTweet = createTweetElement(tweets[i]);
      $('#tweet-container').append(createdTweet);
    }
  };


function createTweetElement(value){
  var $img = $('<img>').attr("src",value.user.avatars.regular).addClass("user-image");
  var $h2 = $('<h2>').text(value.user.name).addClass("username");
  var $h3 = $('<h3>').text(value.user.handle).addClass("handle");
  var $header = $('<header>').addClass("tweet-header").append($img, $h2, $h3);
  var $content = $('<p>').text(value.content.text).addClass("tweet-text");
  var $footer = $('<footer>').text(value.created_at).addClass("time-ago");
  var $iconHeart = $('<i>').addClass('fa fa-heart').attr('aria-hidden', true);
  var $iconRetweet = $('<i>').addClass('fa fa-flag').attr('aria-hidden', true);
  var $iconFlag = $('<i>').addClass('fa fa-retweet').attr('aria-hidden', true);
  var $div = $('<div>').addClass("icon").append($iconRetweet, $iconFlag, $iconHeart);
  return $('<article>')
    .addClass("tweet-box")
    .append($header, $content, $footer, $div);
}
  //var $tweet = createTweetElement(tweetData);
  //$('#tweet-container').append($tweet);

console.log(renderTweets(data));

});