var connect = require('connect');
var app = connect();

app.use(logger);
app.use("/home", sendMsg);
app.use("/about", sendMsg2);
app.listen(3000);

console.log("on port 3000...") ;

function logger(req, res, next) {
    console.log("Req info: %s %s", req.method, req.url);
	next();
}

function sendMsg(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.write("home page <br>");
    res.end('Using Connect');
};

 function sendMsg2(req, res, next) {
     res.setHeader('Content-Type', 'text/html');
     res.write("ABOUT... <br>");
     res.end('Using Connect');
 };
