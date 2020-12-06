// server
var http = require("http");
var connect = require("connect");

var app = connect();
var WebSocketServer = require("ws").Server;
var server;
var wsServer;

server = http.createServer(app);

wsServer = new WebSocketServer({
    server: server
});

wsServer.on("connection", function(ws) {
    ws.on("message", function(message, flags) {
        msg = "Recvd: " +  message ;
        ws.send(msg, flags);
    });
});

console.log("port: 3000") ;
server.listen(3000);
