var http = require("http");

http.createServer(function(request, response) {
	
	if (request.url === "/home") {
		console.log("valid URL");
		response.end("Using HTTP :-)");
	} else {
		console.log("Invalid URL");
		response.statusCode = 404;
		response.end("info not found.");
	}
}).listen(3000);
