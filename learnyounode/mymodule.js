const fs = require('fs')
const path = require('path')

const fileterByExtension = (dir, extension, callback) => {

    fs.readdir(dir, (error, files) => {

        if (error) return callback(error)

        let filteredFiles = files
            .filter(file => path.extname(file) == '.' + extension)

        callback(null, filteredFiles)

    })
}

module.exports = fileterByExtension