/** To fix the memory leak in the index.js file we took snapshots of the heap in the application
 * using chrome dev tools and running our application in the following way: node --inspect index.js
 */

const http = require('http')
const starwarsName = require('starwars-names').random
const names = {}

http.createServer((req, res) => {
    res.end(`Your unique name is:  ${createName(req)} \n`)
}).listen(8080)

function createName() {
    var result = starwarsName()
    names[result] = names[result] ?
        names[result] + 1 :
        1
    return result + names[result]
}