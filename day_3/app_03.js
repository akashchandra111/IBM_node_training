process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log("my msg: ", err)
}) ;

// the asynchronous or synchronous code that emits the otherwise uncaught error
var err = new Error('MyError');

console.log("Before throwing an Err") ;
throw err ;
console.log("After throwing an Err") ;
