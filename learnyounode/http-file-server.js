const http = require('http')
const fs = require('fs')
const { pipeline } = require('stream')

const server = http.createServer((request, response) => {

    pipeline(fs.createReadStream(process.argv[3]), response, error => {
        if (error) console.log(`There was an error with the streams ${error.msg}`)
        console.log('The pipeline ended without problem')
    })

})

server.listen(process.argv[2])