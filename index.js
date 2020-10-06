//these are our npm dependencies
const twit = require('twit');
//these are depdedencies established in other files
//this is creating a twit object using API tokens established in a file that is ignored from git
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);
const myid_str = [925160703006330880, 22831053, 1096867112029691911, ];

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