const trumpet = require('trumpet')
const { Transform, pipeline } = require('stream')

const tr = trumpet()

const transformStream = new Transform({
    transform(chunk, encoding, callback) {

        this.push(chunk.toString().toUpperCase())
        callback()

    }
})

const logError = error => {
    if (error) console.log(`There was an error: ${error}`)
}

const trStream = tr.select('.loud').createStream()
pipeline(trStream, transformStream, trStream, logError)
// trStream.pipe(transformStream).pipe(trStream)

// process.stdin.pipe(tr).pipe(process.stdout)
pipeline(process.stdin, tr, process.stdout, logError)
