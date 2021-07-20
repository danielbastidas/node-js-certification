/** This is an example of how the require keyword works loading modules only once and then
 * caching them
 */

var test = require('./cached-module')
test = require('./cached-module')
