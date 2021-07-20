// Begin reading from stdin so the process does not exit. Prevent node js process exit
process.stdin.resume()

function handleSignal(signal) {
    console.log(`Received signal: ${signal}`)
}

process.on('SIGINT', handleSignal)
process.on('SIGWINCH', handleSignal)
