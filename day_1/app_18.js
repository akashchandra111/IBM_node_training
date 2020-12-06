console.log("starting server: 8889 ...\n") ;
// ------------------------
var net = require("net");
var server = net.createServer(function(socket) {

//socket.end("Goodbye!\n");
socket.write("Goodbye!\n");
});
server.listen(8889);

server.on("error", function(error) {
	if (error.code === "EADDRINUSE") {
		console.error("Port is already in use");
	}
});


server.on("data", function(data) {
    console.log( "data: ",  data);
});

server.on('connect', function(connect) {
      console.log('connection established');

  }); 
