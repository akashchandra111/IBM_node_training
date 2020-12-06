let events = require('events');
let emitter = new events.EventEmitter();

// emitter.setMaxListeners(1);  // default is 10. If exceeded, it issues a warning.
// value of 0: the emitter accepts unlimited listeners - no warning.

emitter.on("evt1", function() {
	console.log("\n 1. event handler invoked.");
});

emitter.on("evt1", function() {
	console.log(" 2. Another event handler invoked.");
});

emitter.on("evt1", function() {
	console.log(" 3. Yet Another event handler invoked.");
});


emitter.removeListener("evt1", function() {
	console.log(">> evt1 handler removed");
});


emitter.emit("evt1");
