/** this example shows how to send information between the main/parent and child process */

const { fork } = require('child_process')

const backGroundProcess = fork('background-process-sharing-data.js')

// tells the child background process to start counting at 5
backGroundProcess.send(process.argv[2])

backGroundProcess.on('message', data => {
    console.log(`data from child background process ${data}`)
    process.exit(0)
})