const { request } = require('http')
const { pipeline } = require('stream')

const logError = error => {
    if (error) console.log(`There was an error: ${error.message}`)
}

const requestStream = request('http://localhost:8099', { method: 'POST' }, response => {
    pipeline(response, process.stdout, logError)
})

pipeline(process.stdin, requestStream, logError)