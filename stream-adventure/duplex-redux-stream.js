/** Creates or combines one stream from a readable and writable stream. In this example the readable stream
 * already exists and I'm creating and implementing the writeable stream. 
 * This example works with objects instead of strings
 */

const duplexer = require('duplexer2')
const { Writable } = require('stream')

module.exports = function (counter) {

    //target = {"US": 2, "GB": 3, "CN": 1}
    //input = {"short":"OH","name":"Ohio","country":"US"} 
    let countriesStats = {}


    const writableStream = new Writable({
        objectMode: true,

        write(chunk, encoding, callback) {

            countriesStats[chunk.country] = (countriesStats[chunk.country] || 0) + 1

            // if (countriesStats[chunk.country]) {
            //     countriesStats[chunk.country]++
            // } else {
            //     countriesStats[chunk.country] = 1
            // }

            callback()

        }

    })

    writableStream.on('finish', () => counter.setCounts(countriesStats))

    return duplexer({ objectMode: true }, writableStream, counter)
}