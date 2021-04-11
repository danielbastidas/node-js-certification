const { Transform } = require('stream')
const combine = require('stream-combiner')
const zlib = require('zlib')

module.exports = function () {

    let booksByGenre = {}
    let previousGenre;

    const transformStream = new Transform({
        objectMode: true,
        write(chunk, encoding, callback) {

            let type = chunk.type

            if (type === 'genre') {

                if (booksByGenre) {
                    this.push(booksByGenre)
                    booksByGenre = undefined
                }

                previousGenre = chunk.name
            }

            if (booksByGenre) {
                if (booksByGenre.books) {
                    booksByGenre.books.push(chunk.name)
                } else {
                    booksByGenre.books = [chunk.name]
                }
            } else {
                booksByGenre = { name: previousGenre }
            }

            callback()

        }
    })

    return combine(transformStream, zlib.createGzip())

}
