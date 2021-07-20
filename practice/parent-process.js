const { fork } = require('child_process')
var count = 0

for (let i = 1; i <= 3; i++) {
    let thread = fork('thread.js')
    thread.send(i.toString())
    thread.on('message', done => {
        count++
        if (count == 3) {
            console.log('Done.')
            process.exit(0)
        }
    })
}
