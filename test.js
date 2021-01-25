const fs = require('fs')
const outputStream = fs.createWriteStream('mill.txt')

for (let i = 0; i < 1e6; i++) {
    outputStream.write('a')
}

outputStream.end()