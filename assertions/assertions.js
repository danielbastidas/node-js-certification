// Testing strict equals
const assert = require('assert').strict

const expected = [[[1, 2, 3]], 4, 5]
const actual = [[[1, 2, 3]], 4, 5]

assert.deepEqual(actual, expected)

// verifying method is called a number of times
const tracker = new assert.CallTracker()

function func() { console.log('YEAH YEAH') }

// expecting func being called once. callsfunc() must be called exactly 1 time before tracker.verify().
// callsfunc is the wrapper of func that needs to be invoked nor the func itself
const callsfunc = tracker.calls(func, 1)

callsfunc()
tracker.verify()