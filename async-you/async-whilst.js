const http = require('http')
const async = require('async')

var value;
var count = 0;

/** The whilst is executing a get request until the response is your desire value */

async.whilst(
    function test(callback) {
        // console.log(`receiving: ${value}`)
        callback(null, value !== 'meerkat')
    },
    function iter(callback) {
        http.get(process.argv[2], response => {
            count++

            response.on('data', chunk => {
                value = chunk.toString()
            })

            response.on('end', () => callback(null, count))

        })
    },
    function (error, result) {
        if (error) console.log(`There was an error: ${error}`)
        console.log(result)
    }
)