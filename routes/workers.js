let express = require('express');
let router = express.Router();
let https = require('https');

let url = "https://auth.api.workday.com/v1/authorize?response_type=code&client_id=OWE0MjExMzMtZTk3My00YTNmLTgzMmMtZDE2YWE4OTY3ODg1&state=xyz&redirect_uri=https://oauth-redirect.googleusercontent.com/r/workday-4d484";


/* GET users listing. */
router.post('/', function (req, res) {
    res.set('Content-Type', 'application/json');

    https.get(url, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });

    res.send(makeWebhookResult());
});

let makeWebhookResult = function () {
    return JSON.stringify({
        "speech": "Success",
        "displayText": "Success!",
        "source": "Yo Mama"
    })
};

module.exports = router;
