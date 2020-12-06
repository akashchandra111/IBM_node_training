var express = require("express");
var http = require("http");
var util = require("util");
var app = express();

app.get("/products/:productId", function(req, res, next) {
	var  crypto;

	try {
	    crypto = require('crypto');
	    console.log('crypto supported.');
	} catch (err) {
	    console.log('crypto support is disabled.');
	}
	
	const secret = "mypass34";
	
	const hash = crypto.createHmac("sha256", secret)
	    .update("Nodejs is cool")
	    .digest("hex");
	
	console.log(hash);
	res.send("Requested: " + req.params.productId + ", hash: " + hash);
});
app.get("/", function(req, res, next) {
	res.send("<strong>Home page...</strong>");
});
app.get("/home", function(req, res, next) {
	res.send({'page': 'home', 'inspect': util.inspect(req.headers)});
});

http.createServer(app).listen(3000);
