/** How to create a stream from a command */
const { spawn } = require('child_process')
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
    const spawnedProcess = spawn(cmd, args)
    return duplexer(spawnedProcess.stdin, spawnedProcess.stdout)
}