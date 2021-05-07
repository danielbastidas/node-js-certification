const EventEmitter = require('events')
const myEmitter = new EventEmitter();

function c1() {
    console.log('an event occurred!');
}

function c2() {
    console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

// getting the amount of event listeners
console.log(`the listener count for the event eventOne is ${myEmitter.listenerCount('eventOne')}`)
console.log(`Getting the listeners: ${myEmitter.rawListeners('eventOne')}`);

myEmitter.emit('eventOne')
myEmitter.once('eventOnce', () => console.log(`eventOnce once fired ${new Date()}`));
myEmitter.emit('eventOnce')
myEmitter.emit('eventOnce')

// emitting event with parameters
myEmitter.on('status', (code, name) =>
    console.log(`the parameters triggered with the event are ${code} and ${name}`))

myEmitter.emit('status', 100, 'foo')

// de-registering a listener from an event
myEmitter.off('eventOne', c1)
myEmitter.emit('eventOne')