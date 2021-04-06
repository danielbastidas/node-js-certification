const { pipeline } = require('stream')
const concat = require('concat-stream')

function reverse(data) {
    let reversed = data.toString().split("").reverse().join("")
    process.stdout.write(reversed)
}

pipeline(process.stdin, concat(reverse), error => {
    if (error) console.log(`There was an error processing the stream: ${error.message}`)
})