console.log("starting  ... 3000\n") ;

var express = require("express");
var http = require("http");
var logger = require('morgan');

var app = express();

//app.use(logger('tiny'));
app.use(logger('combined'));
app.get("/", function(req, res, next) {
	res.send("<strong>Home page</strong>");
});

app.get("/contact", function(req, res, next) {
	res.send("<strong>Contact us</strong>");
});

app.get("/product", function(req, res, next) {
	res.send("<strong>Product List</strong>");
});

http.createServer(app).listen(3000);
