/** The exec child process can be used when you can wait to the whole answer of the command because
 * the answer is small. Exec waits for the whole answer.
 * Notice that exec brings the risk of command injection.
 * Spawn by the default does not use the shell so is lighter than the exec child process
 */

const { exec } = require('child_process')

exec('find . -type f | wc -l', (error, stdout, stderr) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log(`The output of the command is: ${stdout}`)
    }

})