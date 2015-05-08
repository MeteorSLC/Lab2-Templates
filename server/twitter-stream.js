stream = {};

wrappedCallback = Meteor.bindEnvironment(
  function (tweet) {
    var simpleT = simplifyTweet(tweet);
    console.log(simpleT);
    Tweets.insert(simpleT);
  }
);
Meteor.methods({
  TwitterStream: function (query) {
    if (query == 'off') {
      if (_.isFunction(stream.stop)) stream.stop();
      //Tweets.remove({});
      return;
    }
    stream = Twit.stream('statuses/filter', {
      track: query
    });
    stream.on('tweet', wrappedCallback);
  }
})
