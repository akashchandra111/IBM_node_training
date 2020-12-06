// client
var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open", function() {
    ws.send("Using WS");
    ws.send("Real time msg... ");
});

ws.on("message", function(data, flags) {
    console.log(flags);
    console.log("Server response: ",  data);
    ws.close();
});

console.log("port: 3000") ;
