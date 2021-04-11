/** You can use the spawn child process when the data return by the process is not small so you can
 * use a stream to get the whole data
 */

const { spawn } = require('child_process')
const { pipeline } = require('stream')

const findCommand = spawn('find', ['.', '-type', 'f'])
const wcCommand = spawn('wc', ['-l'])

pipeline(findCommand.stdout, wcCommand.stdin, error => {
    if (error) console.log(error.message)
})

wcCommand.stdout.on('data', data => {
    console.log(`Number of files found: ${data}`)
})
