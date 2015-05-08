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
  Session.set('streamStatus','twitStreamON');
},
  'click #TwitStop': function(){
    Session.set('streamStatus',null);
  }
});