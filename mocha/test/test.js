var assert = require('assert')
const internal = require('stream')
const { setImmediate } = require('timers')

describe('Array', function () {
    describe('#indexOf', function () {
        it.only('should return -1 when the value is not present', function () {
            assert.ok([1, 2, 3].indexOf(4), -1)
        })

        // this test won't be executed
        it('should return -1 when the value is not present', function () {
            assert.ok([1, 2, 3].indexOf(4), -1)
        })
    })
})

it.skip('double done', function (done) {
    // calling done twice is an error
    setImmediate(done)
    setImmediate(done)
})