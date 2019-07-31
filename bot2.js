var twit = require("twit");


var Bot = new twit({
    consumer_key: ,
    consumer_secret: ,
    access_token: ,
    access_token_secret: ,
});




var phraseArray = ["hey twitter",
    "im tweeting",
    "tweet tweet",
    "tweetstorm time... 1/22",
    "plz RT v important",
    "delete ur account",
    "it me",
    "same",
    "#dogpants go on 4 legs!!",
    "#thedress is blue and black"
];

function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);
Bot.tweet(phrase);