// console.log(__filename);
// console.log(__dirname);
const EventEmitter = require('events');

//removed because we are extending the Logger class to Event Emitter
// const emitter = new EventEmitter();
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //send an HTTP request
        console.log(message);
    
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}


module.exports = Logger;