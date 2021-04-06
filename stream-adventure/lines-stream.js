const { Transform, pipeline } = require('stream')

let odd = true
const transformStream = new Transform({
    transform(chunk, encoding, callback) {

        this.push((odd) ? chunk.toString().toLowerCase() :
            chunk.toString().toUpperCase())
        odd = !odd
        callback()

    }
})

pipeline(process.stdin, transformStream, process.stdout, error => {
    if (error) console.log(`There was an error processing the stream: ${error.message}`)
})