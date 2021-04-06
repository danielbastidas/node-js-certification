/** This shows how to implement your own readable stream and how to write data to the stream
 * using the push method
 */
const { Readable } = require('stream')

const readStream = new Readable({})

// write in here something if you want to do some work like logging while the stream is being read
readStream._read = () => { }
readStream.push(process.argv[2])

readStream.pipe(process.stdout)