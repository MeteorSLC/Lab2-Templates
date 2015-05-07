Twitter = Meteor.npmRequire('twit');

Twit = new Twitter({
  consumer_key: 'egrdttx65TmHwFcFMxJ9BeMR8',
  consumer_secret: 'fR2r02CGUnJCDtVUUIeMij2WjNiqxtOo6QPqvzyZr3AIUnxztb',
  access_token: '16226749-q84poxyAnEkn3xMi9acUhIgC9I5EOApOI2Z3DvDZM',
  access_token_secret: '7mrZel7Kr8joT7tCyJ3zeQC8tgdeddzpiDuaqtRaij914'
});

simplifyTweet = function(tweet){
  var retObj = {};
  if (!tweet) return retObj;
  retObj.created_at = tweet.created_at;
  retObj.text = tweet.text;
  retObj.user = '@' + tweet.user.screen_name;

  return retObj;
}