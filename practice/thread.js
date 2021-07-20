const fs = require('fs')

function addLineToFile(data) {

    fs.appendFile('./test-file.txt', data + '\n', err => {
        if (err) throw err
        process.send('done')
    })

}

process.on('message', message => {
    console.log(`message received ${message}`)
    addLineToFile(message)
})