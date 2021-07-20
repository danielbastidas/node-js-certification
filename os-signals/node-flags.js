const util = require('util')
process.allowedNodeEnvironmentFlags.forEach(flag => console.log(util.inspect(flag)))