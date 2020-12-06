var events = require("events");
var emitter = new events.EventEmitter();

var username = "nodeUser2";
var password = "password";

emitter.on("userAdded", function(username, password) {
	console.log("Added user " + username);
});

// One-Time Event Listener
emitter.once("userAdded", function(username, password) {
	console.log("Added user " + username);
});




// add the user & then emit an event
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
