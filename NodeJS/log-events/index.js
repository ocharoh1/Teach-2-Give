const EventEmitter = require('events');
const LogEvents = require('./LogEvents');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('log', (message) => {
  LogEvents(message);
});

setTimeout(() => {
  myEmitter.emit('log', 'New log event emitted');
}, 2000);
