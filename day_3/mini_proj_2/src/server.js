
let http = require('http');
let static = require('node-static'); 
let fileServer = new static.Server();
const port = 3000;

let app = http.createServer(function(request, response) {
	fileServer.serve(request, response);
});
let io = require('socket.io').listen(app, { log: false });

app.listen(port);

io.sockets.on('connection', function(socket) {
	let id = socket.id;

	socket.on('mousemove', function(data) {
		data.id = id;
		socket.broadcast.emit('moving', data);
	});
	
	socket.on('disconnect', function() {
		socket.broadcast.emit('clientdisconnect', id);
	});
});

console.log(port);
