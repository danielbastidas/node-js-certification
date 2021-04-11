/** This shows how to execute a command using the shell and the spawn child process allowing us
 * stream the returned data
 */

const { spawn } = require('child_process')

const findCommand = spawn('find . -type f | wc -l & echo $SOME_VARIABLE', {
    stdio: 'inherit',
    shell: true,
    cwd: '/home/danielbastidas/Downloads',
    env: { SOME_VARIABLE: 'SOME VALUE' } // the default value for this property is process.env
})

findCommand.on('data', data => {
    console.log(`The command result is: ${data}`)
})
