const http = require('http')
const url = require('url')

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime(time) {
    return {
        unixtime: time.getTime()
    }
}

const server = http.createServer((request, response) => {


    if (request.method == 'GET') {

        let result;

        const incomingUrl = new URL(request.url, 'http://localhost')
        const isoTime = new Date(incomingUrl.searchParams.get('iso'))

        if (incomingUrl.pathname == '/api/parsetime') {
            result = parseTime(isoTime)
        } else if (incomingUrl.pathname == '/api/unixtime') {
            result = unixTime(isoTime)
        }

        if (result) {
            response.writeHead(200, { 'Contenty-Type': 'application/json' })
            response.end(JSON.stringify(result))
        } else {
            response.writeHead(500)
            response.end()
        }

    }


}).on('error', error => console.log(`There was an error with the http server ${error}`))

server.listen(process.argv[2])