const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// initialize object
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit event
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
