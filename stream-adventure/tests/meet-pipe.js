const fs = require('fs')
const { pipeline } = require('stream')

function fileToStream(filePath, writableStream, callback) {

    pipeline(fs.createReadStream(filePath), writableStream, err => {
        if (err) callback(err)
        callback()
    })
}

function fileToStreamPromise(filePath, writableStream) {

    return new Promise((resolve, reject) => {
        pipeline(fs.createReadStream(filePath), writableStream, error => {
            if (error) reject(new Error('PIPELINE_ERROR'))
            resolve()
        })
    })

}

module.exports = {
    fileToStream,
    fileToStreamPromise
}

