const assert = require('assert')
const isCoolNumber = require(process.argv[2])

assert.ok(isCoolNumber(42), 'the answer should be true')

