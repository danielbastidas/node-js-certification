const { Transform, pipeline } = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

pipeline(process.stdin, transformStream, process.stdout, error => {
    if (error) console.log(`There was an error processing the stream: ${error.message}`)
})
