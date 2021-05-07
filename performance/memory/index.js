/** We can track the memory not only using the dev tools of chrome but also using the climem program
 * npm install -g climem
 * then installed the application locally in your project
 * npm install --save-dev climem
 * run your program for profiling
 * node -r climem index.js
 * a file should be created in the same folder with the following name: climem-pid
 * to see the memory graphic execute the following command
 * climem climem-pid
 */

const http = require('http')
const starwarsName = require('starwars-names').random
const names = {}

http.createServer((req, res) => {
    res.end(`Your unique name is:  ${createName(req)} \n`)
}).listen(8080)

function createName() {
    var result = starwarsName()
    if (names[result]) {
        result += names[result]++
    }
    names[result] = 1
    return result
}