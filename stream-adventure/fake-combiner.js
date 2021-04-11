const combine = require('stream-combiner')
const zlib = require('zlib')

module.exports = function () {
    return combine(zlib.createGzip())
}