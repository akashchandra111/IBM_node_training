var util = require('util'),
EventEmitter = require('events').EventEmitter;

var Ticker = function() {
	var self = this;
	setInterval(function() {
		self.emit('tick');
	  }, 1000);
 };
util.inherits(Ticker, EventEmitter);

var count = 0 ;
var ticker = new Ticker();
ticker.on("tick", function() {
	count++ ;
	console.log("tick received = " + count);
	if (count > 5 ) 
		throw new Error("Tired of counting");

 });
 
 ticker.on("tick", function() {
	console.log("yet another tick received = " + count);
 });

