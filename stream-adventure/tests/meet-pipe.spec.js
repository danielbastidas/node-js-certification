const fileToStream = require('./meet-pipe')
const { PassThrough } = require('stream')
const fs = require('fs')

jest.mock('fs')

test('Verifying data was written to stream', () => {

    let data = ''

    const mockPath = '/some/fake/path'
    const mockReadableStream = new PassThrough()
    const mockWritableStream = new PassThrough({
        write(chunk, encoding, callback) {
            data += chunk.toString()
            callback()
        }
    })

    fs.createReadStream.mockReturnValueOnce(mockReadableStream)

    fileToStream(mockPath, mockWritableStream)

    setTimeout(() => {
        mockReadableStream.emit('data', 'test ')
        mockReadableStream.emit('data', 'output')
        mockReadableStream.emit('end')
    }, 100)

    expect(data).toBe('test output')

})