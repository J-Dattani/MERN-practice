

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on('messageLogged', (args) => {
//     console.log('Listener called', args);
// });

// emitter.emit('messageLogged', { id: 1, url: 'http://' });

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;