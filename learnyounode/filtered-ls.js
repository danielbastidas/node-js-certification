var fs = require('fs')
var path = require('path')
var filterBy = '.' + process.argv[3]

fs.readdir(process.argv[2], (error, files) => {

    files
        .filter(file => path.extname(file) == filterBy)
        .forEach(file => console.log(file))

})