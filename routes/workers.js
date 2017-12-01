var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res) {
      res.set('Content-Type', 'application/json');
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
