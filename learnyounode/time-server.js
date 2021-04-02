const net = require('net')
const dateFormatter = require('strftime')

const server = net.createServer(socket => {
    socket.end(`${dateFormatter('%Y-%m-%d %H:%M')}\n`)
})

server.listen(process.argv[2])