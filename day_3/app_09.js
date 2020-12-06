// ws1.html
var httpd = require('http').createServer(handler);
var io = require('socket.io')(httpd);  
var fs = require('fs');
httpd.listen(3000);
console.log("server  ---> 3000") ;
function handler(req, res) {
    fs.readFile('./ws1.html',
        function(err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading html');
            }
            res.writeHead(200);
            res.end(data);
        });
}
io.sockets.on('connection', function (socket) {
    console.log("connection: evt cb");
    socket.on('clientMessage', function(content) {
        socket.emit('serverMessage', 'You said: ' + content);
        socket.broadcast.emit('serverMessage', socket.id + ' said: ' +
            content);
    });
});
