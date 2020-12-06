console.log("starting client : 8889 ...\n") ;
// ------------------------
var net = require("net");
var client = net.connect(8000, "localhost", function() {
	console.log("Connection established");
    client.write("using node\n");
});

client.on("data", function(data) {
    console.log( "data: ",  data);
});
