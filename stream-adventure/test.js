const combineStream = require('./combiner-stream')
const { Writable, pipeline, Transform } = require('stream')

const writableStream = new Writable({
    objectMode: true,

    write(chunk, encoding, callback) {

        // console.log(`it is being called with the following chunk: ${JSON.stringify(chunk)}`)
        // this.push(chunk)
        callback(null, chunk)

    }

})

writableStream.write({ "type": "genre", "name": "cyberpunk" })
writableStream.write({ "type": "book", "name": "Neuromancer" })
writableStream.write({ "type": "book", "name": "Snow Crash" })
writableStream.end()

const transformStream = new Transform({
    readableObjectMode: true,
    writableObjectMode: false,
    transform(chunk, encoding, callback) {

        console.log(`Transform stream receives: ${JSON.stringify(chunk)}`)
        this.push(JSON.stringify(chunk))
        callback()

    }
})

pipeline(writableStream, combineStream(), process.stdout, error => {
    if (error) console.log(error)
    console.log('done.')
})
