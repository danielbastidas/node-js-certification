const http = require('http')
const { pipeline, Transform } = require('stream')

const transfomer = new Transform({
    transform(chunk, encoding, callback) {
        try {
            this.push(chunk.toString().toUpperCase())
        } catch (error) { callback(error) }
        callback()
    }
})

const server = http.createServer((request, response) => {
    if (request.method == 'POST') {

        pipeline(request, transfomer, response, error => {
            if (error) console.log(`There was an error with the pipeline ${error}`)
        })

    }
})

server.listen(process.argv[2])