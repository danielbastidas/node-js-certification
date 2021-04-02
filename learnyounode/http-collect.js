const http = require('http')
const concat = require('concat-stream')

http.get(process.argv[2], response => {

    response.pipe(concat(data => {
        console.log(data.toString().length)
        console.log(data.toString())
    }))

}).on('error', error => console.log(error.msg))
