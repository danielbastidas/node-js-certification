/** A stream of objects */
const { Transform, pipeline, Writable } = require('stream')

const objectTransform = new Transform({
    writableObjectMode: true,
    readableObjectMode: true,

    transform(chunk, enc, callback) {

        try {

            let object = chunk

            this.push({ x: object.x + 1, y: object.y })
            this.push({ x: object.x - 1, y: object.y })
            this.push({ x: object.x, y: object.y + 1 })
            this.push({ x: object.x, y: object.y - 1 })
            callback()
        } catch (error) {
            console.log(`Error transforming object: ${error}`)
            callback(error)
        }

    }
})

const outputStream = new Transform({
    writableObjectMode: true,

    transform(chunk, enc, callback) {
        try {
            callback(null, console.log(JSON.stringify(chunk)))
        } catch (error) {
            console.log(`There was an error in the output stream ${error.msg}`)
            callback(null)
        }
    }
})

const coordinate1 = { x: 0, y: 0 }
const coordinate2 = { x: 100, y: 15 }
const coordinate3 = { x: -25, y: 6 }

objectTransform.write(coordinate1)
objectTransform.write(coordinate2)
objectTransform.write(coordinate3)

pipeline(objectTransform, outputStream, error => {
    if (error) {
        console.log(`An error ocurred in the pipeline: ${error.msg}`)
    } else {
        console.log('Done.')
    }
})