Twitter = Meteor.npmRequire('twit');

Twit = new Twitter({
  consumer_key: 'egrdttx65TmHwFcFMxJ91343245BeMR8',
  consumer_secret: 'fR2r02CGUnJCDtVUUIeMij223452345234WjNiqxtOo6QPqvzyZr3AIUnxztb',
  access_token: '16226749-q84pox234543yAnEkn32354xMi9acUhIgC9I52345543EOApOI2Z3DvDZM',
  access_token_secret: '7mrZel7Kr8j352445352342oT74534523tCyJ3zeQC8t542gdeddzpiDuaqtRaij914'
});

simplifyTweet = function(tweet){
  var retObj = {};
  if (!tweet) return retObj;
  retObj.created_at = tweet.created_at;
  retObj.text = tweet.text;
  retObj.user = '@' + tweet.user.screen_name;

  return retObj;
}