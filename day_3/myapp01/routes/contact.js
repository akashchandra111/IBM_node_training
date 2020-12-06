var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send({tel: 100, location: 'Blr'});	
});

module.exports = router;
