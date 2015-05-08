Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  },
  twitRunning: function(){
    return Session.get('streamStatus');
  }
});


Template.hello.events({
  'click #counter': function () {
    Session.set('counter', Session.get('counter')+1);
  },
  'click #TwitStart': function(){
    Meteor.call('TwitterStream','Lebron');
  Session.set('streamStatus','twitStreamON');
},
  'click #TwitStop': function(){
    Meteor.call('TwitterStream','off');
    Session.set('streamStatus',null);
  }
});

Template.TwitWall.helpers({
  Tweets: function(){
    return Tweets.find().fetch();
  }
});

