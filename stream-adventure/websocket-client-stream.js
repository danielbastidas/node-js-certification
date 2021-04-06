const WebSocket = require('ws')
const { pipeline } = require('stream')

const ws = new WebSocket('ws://localhost:8099')
const webSocketStream = WebSocket.createWebSocketStream(ws)

webSocketStream.write('hello\n')

pipeline(webSocketStream, process.stdout, error => {
    if (error) console.log(`There was an error: ${error.message}`)
})
