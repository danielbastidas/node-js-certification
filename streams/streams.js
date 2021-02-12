const fs = require('fs')
const { PassThrough, pipeline } = require('stream')

const inputStream = fs.createReadStream("file.txt")
// inputStream.pipe(process.stdout)
const outputStream = fs.createWriteStream("out.txt")
// process.stdin.pipe(outputStream)



const passThrough = new PassThrough()

// passThrough.on('error', err => console.log(err.message))
// process.stdin.on('error', err => console.log(err.message))
// process.stdout.on('error', err => console.log(err.message))

// process.stdin.pipe(passThrough).pipe(stdout)

/** pipeline allows you to manage error for several streams and also indicates
 * when all the stream finish. Other way you have to handle errors on each stream in the pipeline.
 * Another advantage of using pipelines is that they automatically free up the resources holded 
 * by the streams when the pipeline finish its work or when there is an error
 */
pipeline(inputStream, passThrough, outputStream, err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('Pipeline ended without errors')
    }
})

passThrough.emit('error', new Error('my error'))

