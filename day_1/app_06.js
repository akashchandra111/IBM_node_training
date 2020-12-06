var events = require("events");
var emitter = new events.EventEmitter();

function handler() {
	console.log("In evt1 handler");
}

emitter.on("evt1", handler);
emitter.emit("evt1");
emitter.removeListener("evt1", handler);

emitter.emit("evt1");
