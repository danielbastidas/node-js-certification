const fetch = require('node-fetch')
const EventEmitter = require('events')

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        this.emit('begin');
        console.time('execute');
        this.on('data', (data) => console.log('got data ', data));
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

const readFile = (url, cb) => {
    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            cb(null, data);
        });
}

withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');

/** I prefer this example of a asynchronous event using the setImmediate method
 * In the following example the listeners are still call sequantialy but they are executed in different
 * processes or threads
 */
const myEmitter = new EventEmitter();
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously1');
    });
});
myEmitter.emit('event', 'a', 'b');