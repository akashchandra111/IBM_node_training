var util = require('util');
require('http').createServer((req, res) => {

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("<h2>Header info:</h2>")
	res.end(util.inspect(req.headers));

	console.log("req.headers = " + util.inspect(req.headers));
	console.log("req.url= " + util.inspect(req.url));	
}).listen(3000);

console.log("starting server...3000");
