const http = require('http')
const { Transform, pipeline } = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

const server = http.createServer((request, response) => {

    pipeline(request, transformStream, response, error => {
        if (error) console.log(`There was an error with the stream ${error.message}`)
        response.end()
    })

}).on('error', error => console.log(`There was an error with the http server ${error.message}`))

server.listen(process.argv[2])