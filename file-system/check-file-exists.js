const fs = require('fs')

const exists = (file) => new Promise((resolve, reject) => {
    fs.access(file, (err) => {
        if (err) {
            if (err.code !== 'ENOENT') { return reject(err) }
            return resolve({ file, exists: false })
        }
        resolve({ file, exists: true })
    })
})

exists(process.argv[2])
    .then(({ file, exists }) => console.log(`"${file}" does${exists ? '' : ' not'} exist`))
    .catch(console.error)

/** If you want to check whether the file exists in order to create or append information to file
 * you must first open the file. See the below example. Because otherwise checking whether the file exists
 * with access method could create a race condition
 */
fs.open('myfile', 'wx', (err, fd) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('myfile already exists');
            return;
        }

        throw err;
    }

    // this method does not exists, is only to indicate that at this moment is ok to write data in the file
    writeMyData(fd);
});

/** The same is true when reading data */
fs.open('myfile', 'r', (err, fd) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('myfile does not exist');
            return;
        }

        throw err;
    }

    // this method does not exists, is only to indicate that at this moment is ok to read data from the file
    readMyData(fd);
});