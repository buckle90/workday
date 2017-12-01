var express = require('express');
var router = express.Router();
var https = require('https');


/* GET users listing. */
router.post('/', function (req, res) {
    res.set('Content-Type', 'application/json');

    https.get('https://encrypted.google.com/', (res) => {
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

var makeWebhookResult = function () {
    return JSON.stringify({
        "speech": "Success",
        "displayText": "Success!",
        "source": "Yo Mama"
    })
};

module.exports = router;
