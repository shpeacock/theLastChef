const animals = require('animals');
const m = require('./data/meals.js');
const bf = m.breakfast;
const twit = require('twit');
//these are depdedencies established in other files
//this is creating a twit object using API tokens established in a file that is ignored from git
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);

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