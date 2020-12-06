var express = require('express');
var router = express.Router();
var User = require('../modules/user');

router.get('/', function (req, res, next) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

module.exports = router;
