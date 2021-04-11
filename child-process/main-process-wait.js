/** in this example the main process waits for the child process to complete */
const { spawnSync } = require('child_process')

console.log('Spawning process and waiting for its completion')

const backGroundProcess = spawnSync('node', ['background-process.js'])

console.log(`Done. Background process finishes with the following exit code ${backGroundProcess.status}`)



