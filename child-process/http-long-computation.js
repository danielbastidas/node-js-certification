/** this example shows how to use fork to create a new thread to execute a long computation task */

const http = require('http')
const { fork } = require('child_process')

const server = http.createServer()

server.on('request', (request, response) => {
    if (request.url == '/longComputation') {
        const thread = fork('thread.js')
        thread.send('start') // notice that you can pass in here a value to be used by the thread
        thread.on('message', data => {
            response.end('' + data) // data represents the long computation result obtained from the thread
        })
    }
})

server.listen(8080)