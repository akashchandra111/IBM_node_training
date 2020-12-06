var express = require("express");
var http = require("http");
var app = express();


app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
  console.log("homepage...") ;
 
});



app.get("/about", function(request, response) {
  response.end("<h3>Welcome to the about page! </h3>");
   console.log("/about...") ;
});

http.createServer(app).listen(3000);
console.log("listening  on 3000...") ;

// pm2 tool for monitoring purpose
// pm2 start js_file	to run it
// pm2 monitor			to monitor
// pm2 stop all			to stop all instances running
