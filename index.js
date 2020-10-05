//these are our npm dependencies
const twit = require('twit');
const animals = require('animals');
const cronJob = require('cron').CronJob;
//these are depdedencies established in other files
const m = require('./data/meals.js');
const bf = m.breakfast;
//this is creating a twit object using API tokens established in a file that is ignored from git
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);
const myid_str = [925160703006330880, 22831053, 1096867112029691911, ];


//this function creates a random breakfast purportedly served to the president of the united states and tweets it
function breakFast() {
    var test = animals();
    var breakfast = bf[Math.floor(Math.random() * bf.length)];
    const params = {
        status: 'today for breakfast @realdonaldtrump is having ' + test + '-dick ' + breakfast
    }
    whChef.post('statuses/update', params);
}


var stream = whChef.stream('statuses/filter', { track: '@realwhChef' });
stream.on('tweet', function(tweet) {
    if (myid_str.indexOf(tweet.user.id_str) > 0) {
        whChef.post('statuses/update', {
            status: "sup @" + tweet.user.screen_name + " I appreciate the good vibes!",
            in_reply_to_status_id: tweet.id_str
        });
    } else {
        whChef.post('statuses/update', { status: ' yes master', in_reply_to_status_id: tweet.id_str });
    }
});

function searchIt() {
    whChef.get('search/tweets', { q: "\" Trump Dick\"", }, gotData);

    function gotData(err, data) {
        if (!data) {
            console.log(err);
        }
        if (data) {
            for (var i = 0; i < tweets.length; i++) {
                var statusObj = {
                    status: "@" + data.statuses[i].user.screen_name +
                        "ay yo. Alls I heard was talk bout' trump and dicks. I thought you might wanna follow my page! I feed that man dicks everyday",
                    in_reply_to_status_id: data.statuses[i].id_str
                }

                whChef.post('statuses/update', statusObj);
            }
        }
    }
}

//this makes sure that the breakfast function runs everymorning at 8:00am EST
var breakFastJob = new cronJob('45 5 * * *', function() {
    breakFast();
}, null, true);

//this looks for followers every sunday, wednesday and friday at 715 PM CST

var proselyte = new cronJob('55 17 * * *', function() {
    searchIt();
}, null, true, );

breakFastJob.start();
proselyte.start();