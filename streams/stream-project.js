// The task in this project is: read a file greater than 2GB and convert the first and every third letter of a
//word in uppercase

const { Transform, pipeline } = require('stream')
const fs = require('fs')

const inputStream = fs.createReadStream('/home/danielbastidas/Downloads/input-3GB.txt')
const outputStream = fs.createWriteStream('/home/danielbastidas/Downloads/input-3GB-transformed.txt')

const transformer = new Transform({
    /** This transformer change the first letter and every third letter of a word inside the input
     * stream file into uppercase for a really big file
     */
    transform(chunk, encoding, callback) {

        try {
            const data = chunk.toString()
            let words = data.split(' ')

            for (let i = 0; i < words.length; i++) {
                for (let j = 0; j < words[i].length; j++) {
                    if (j == 0 || j % 3 == 0) {
                        words[i] = words[i].substr(0, j) + words[i].charAt(j).toUpperCase() + words[i].substr(j + 1) + ' '
                    }
                }
                this.push(words[i])
            }
        } catch (error) {
            callback(error)
        }

        callback()
    }
})


pipeline(inputStream, transformer, outputStream, err => {
    if (err) {
        console.log(`There was an error transforming the file: ${err.message}`)
    } else {
        console.log('The file was transformed successfully. Check input-3GB-transformed.txt')
    }
})