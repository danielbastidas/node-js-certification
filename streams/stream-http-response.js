/** This is an example of how to download a file using streams in node js */
const express = require('express')
// const {pipeline} = require('stream')
const fs = require('fs')

const app = express()

app.get('/downloadFile', (req, res, next) => {
    const inputStream = fs.createReadStream('file.txt')
    res.attachment('file.txt')
    inputStream.on('open', () => {
        inputStream.pipe(res)
    })

    inputStream.on('error', err => {
        next(err)
    })

})

app.listen(8080)
console.log('Server listening on port 8080')