var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
require('dotenv').config()

var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var users = ["50323173", "178580925"];

var stream = Bot.stream('statuses/filter', { follow: users });

stream.on('tweet', function(tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        Bot.post('statuses/retweet/:id', { id: tweet.id_str }, function(err, data, response) {
            console.log(data)
        })
    }
})