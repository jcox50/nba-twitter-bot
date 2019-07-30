/*var twit = require("twit");


var Bot = new twit({
    consumer_key: ,
    consumer_secret: ,
    access_token: ,
    access_token_secret: ,
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
})*/