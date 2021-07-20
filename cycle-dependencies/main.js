/** This example illustrate how node js manages circular dependencies, which is returning instances
 * of partial objects when call with the require method. In this example main loads module a, which loads module b
 * which again loads module a, so at that momento b receives an uncomplete instance of a module, that is the reason
 * the line console.log('in b, a.done = %j', a.done); in b.js prints: in b, a.done = false
 * because module a has not been fully initialized to avoid a infinite loop dependency
 */
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);