var fs = require('fs');

var readableStream = fs.createReadStream('test1.txt');
var data = '';

readableStream.setEncoding('utf8');
 
readableStream.on('data', function(block) {
	console.log(">> block recvd.");
    data+=block;
});
 
readableStream.on('end', function() {
	console.log(">> File IO ended.") ;
    console.log(data);
});
