const http = require('http')
const trace = require('jstrace')

const server = http.createServer((request, response) => {

    trace("request:start", { url: request.url })
    response.setHeader('content-type', 'application/json')
    let status, body

    if (request.method === 'GET' && request.url === '/prognosis') {
        status = 200
        body = { ok: true }
    } else {
        status = 404
        body = { "erro": "notfound" }
    }

    response.writeHead(status)
    response.end(JSON.stringify(body))
    trace("request:end", {
        statusCode: status,
        body: body
    })
})

server.listen(9999)
console.error("up")