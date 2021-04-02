var fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
    if (error) console.log(`There was an error: ${error.msg}`)
    console.log(data.split('\n').length - 1)
})