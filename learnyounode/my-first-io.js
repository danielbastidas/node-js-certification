var fs = require('fs')

var content = fs.readFileSync(process.argv[2]).toString()
//look the following option does not need an invocation to the toString method
//var content = fs.readFileSync(process.argv[2], 'utf-8')

console.log(content.split('\n').length - 1)