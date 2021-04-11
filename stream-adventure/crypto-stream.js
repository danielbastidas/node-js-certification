const { pipeline } = require('stream')
const crypto = require('crypto')

const cryptoStream = crypto.createDecipheriv('aes256', process.argv[2], process.argv[3])

pipeline(process.stdin, cryptoStream, process.stdout, error => {
    if (error) console.log(error.message)
})