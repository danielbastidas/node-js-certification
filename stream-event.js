/** The purpose of this program is to create your own streams and use events on streams
 * as an alternative way to work with streams (pipelines are more recommended)
 * The example should include how to read and write data using events and how to pause and
 * resume streams. Also consider sending data on demand (as it is requested) instead of pushing all
 * the data in the stream without being requested
 * The example will transform a file of 400Mb and report progress in the meantime. Stopping every 5 seconds
 * for 2 seconds and the keeping on file transformation
 */

// The task in this project is: read a file greater than 2GB and convert the first and every third letter of a
//word in uppercase

const { Transform } = require('stream')
const fs = require('fs')

let outputStream = fs.createWriteStream('400mb.txt')

for (let i = 0; i < 500000; i++) {
    outputStream.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n')
}

outputStream.end()

const inputStream = fs.createReadStream('400mb.txt')
outputStream = fs.createWriteStream('400mb-transformed.txt')

const transformer = new Transform({
    /** This transformer change the first letter and every third letter of a word inside the input
     * stream file into uppercase for a really big file
     */
    transform(chunk, encoding, callback) {

        try {
            const data = chunk.toString()
            let words = data.split(' ')

            for (let i = 0; i < words.length; i++) {
                for (let j = 0; j < words[i].length; j++) {
                    if (j == 0 || j % 3 == 0) {
                        words[i] = words[i].substr(0, j) + words[i].charAt(j).toUpperCase() + words[i].substr(j + 1) + ' '
                    }
                }
                this.push(words[i])
            }
        } catch (error) {
            callback(error)
        }

        callback()
    }
})

var stop = false

// the unref is used to tell node js to not wait for the setInterval and setTimeout
// allowing the application to finish when the pipe is done. Otherwise the application will hang
// until the last setTimeout finish

setInterval(() => {
    stop = true
    setTimeout(function () {
        stop = false
    }, 1000).unref()

}, 5000).unref()

inputStream
    .pipe(transformer)
    .on('error', err => {
        console.log(`There was an error transforming the file: ${err.message}`)
    })
    .on('data', (chunk) => {
        if (stop) {
            if (!transformer.isPaused) {
                transformer.pause()
            }
        } else {
            if (transformer.isPaused) {
                transformer.resume()
            }
            process.stdout.write('.')
        }
    })
    .pipe(outputStream)
    .on('finish', () => console.log('Done.'))

// clearTimeout(myTimeout)

// pipeline(inputStream, transformer, outputStream, err => {
//     if (err) {
//         console.log(`There was an error transforming the file: ${err.message}`)
//     } else {
//         console.log('The file was transformed successfully. Check input-3GB-transformed.txt')
//     }
// })