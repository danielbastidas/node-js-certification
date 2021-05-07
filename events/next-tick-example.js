/** Show why is the purpose of the nextTick method which delegate the invocation until the next
 * tick of the cpu. In other words not executing the code in the same event loop
 */
const EventEmitter = require('events');
let eventEmitter = new EventEmitter()

eventEmitter.emit('event');

eventEmitter.on('event', () => {
    console.log('an event occurred!');
});

// The previous code does not listen to the event because the emit invocation happened before registering the 
// call back of the event. In order to work we have to execute the nextTick method. Look the example below

eventEmitter = new EventEmitter()

let next = () => {
    eventEmitter.emit('event')
}

process.nextTick(next)

eventEmitter.on('event', () => {
    console.log('an event occurred2');
});