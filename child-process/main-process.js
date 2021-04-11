/** in this example the main process does not wait for the child process to end */
const { spawn } = require('child_process')

const backGroundProcess = spawn('node', ['background-process.js'], {
    // in order to allow the main process finish without exiting the child background process, we have to
    // detach stdio
    stdio: "ignore",
    detached: true
})

// the child process can run independently of the main/parent process
backGroundProcess.unref()
