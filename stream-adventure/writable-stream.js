/** This shows how to implement your own writable stream and how to perform some operation
 * while the data is received by the writable stream
 */
const { Writable } = require('stream')

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(`writing: ${chunk.toString()}`)
        callback() // succeed
    }
})

process.stdin.pipe(writableStream)