var FS = require('fs'),
var Q = require('q');
var colors = require ("colors") ;    


// nfcall(): a handy utility function to convert to a promise.
var promiz = Q.nfcall(FS.readFile, "./sample.txt", "utf-8");

	promiz.then(function(data) {      
	    console.log('\n\nFile read:\n'.rainbow, data);
	}) ;

	promiz.fail(function(err) {
	    console.error('Error:', err);
	})

