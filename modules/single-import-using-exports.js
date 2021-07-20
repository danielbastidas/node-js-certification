/** Notice that when we export code using the alias exports object, we export the whole object instead of
 * a single function
 */
const math = require('./single-export-using-exports')

console.log(math.multiplyByTwo(3))