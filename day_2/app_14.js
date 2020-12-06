var express = require("express");
var http = require("http");
var util = require("util");
var app = express();

app.get("/products/:productId", function(req, res, next) {
	res.send("Requested: " + req.params.productId);
});
app.get("/", function(req, res, next) {
	res.send("<strong>Home page...</strong>");
});
app.get("/home", function(req, res, next) {
	res.send({'page': 'home', 'inspect': util.inspect(req.headers)});
});

http.createServer(app).listen(3000);
