console.log(__dirname);

var url = 'https://api.example.com/log';

function logMessage(message) {
    console.log('Logging message:', message);
}

module.exports = logMessage;