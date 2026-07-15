// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on('messageLogged', (args) => {
//     console.log('Listener called', args);
// });

// emitter.emit('messageLogged', { id: 1, url: 'http://' });

const  EventEmitter = require('events');

const Logger = require('./logger');

const logger = new Logger();

// Register a listener
logger.on('messageLogged', (args) => {
    console.log('Listener called', args);
});

logger.log('message');