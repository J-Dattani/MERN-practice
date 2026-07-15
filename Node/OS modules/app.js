const os = require('os');

var tmem = os.totalmem();
var freemem = os.freemem();

console.log(`Total Memory: ${tmem}`);
console.log(`Free Memory: ${freemem}`);
