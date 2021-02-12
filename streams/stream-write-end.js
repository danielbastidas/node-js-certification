/** This example shows how to write data into a stream even after the pipe complete the streams */

const fs = require('fs')
const readStream = fs.createReadStream(__filename)
const writeStream = fs.createWriteStream(__filename + '.end')

readStream.pipe(writeStream, { end: false })

readStream.on('end', () => writeStream.write('Done.'))
