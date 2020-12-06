console.log("starting  ...3000\n") ;

var connect = require("connect");
var http = require("http");

var app = connect();

app.use( "/about", function(req, res, next){
    res.end("About Us: propaganda\n");
});
app.use( "/product", function(req, res, next){
    res.end("List of products\n");
});
app.use( "/contact",  function(req, res, next){
    res.end("Call Us asap\n");
});
app.use( "/", function(req, res, next){
    res.end("Home page\n");
});

http.createServer(app).listen(3000);
