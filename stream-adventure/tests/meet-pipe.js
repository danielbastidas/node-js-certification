const fs = require('fs')
const { pipeline } = require('stream')

function fileToStream(filePath, writableStream) {

    pipeline(fs.createReadStream(filePath), writableStream, err => {
        if (err) throw err
    })
}

module.exports = fileToStream

