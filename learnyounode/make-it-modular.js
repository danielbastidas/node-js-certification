const fileterByExtension = require('./mymodule.js')

const printFiles = (error, files) => {
    if (error) console.log(error.msg)

    files.forEach(file => console.log(file))
}

fileterByExtension(process.argv[2], process.argv[3], printFiles)