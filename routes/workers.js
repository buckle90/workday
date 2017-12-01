let express = require('express');
let router = express.Router();
let https = require('https');

let url = "https://api.workday.com/common/v1/workers";
let token = '';

/* GET users listing. */
router.post('/', function (req, res) {
    process.stdout.write("TEST");

    console.log(req);
    res.set('Content-Type', 'application/json');
    res.set('Authorization', 'bearer ' + token);

    https.get(url, (result) => {
        console.log('statusCode:', result.statusCode);
        console.log('headers:', result.headers);

        result.on('data', (d) => {
            process.stdout.write(d);

            res.send(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });

});

let makeWebhookResult = function () {
    return JSON.stringify({
        "speech": "Success",
        "displayText": "Success!",
        "source": "Yo Mama"
    })
};

module.exports = router;
