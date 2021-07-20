const os = require('os')
const util = require('util')

console.log(`operating system architecture ${os.arch()}`)

// another option to pretty print
console.log(`cpus info ${util.inspect(os.cpus())}`)

console.log(`free memory in bytes ${os.freemem()}`)
console.log(`home dir ${os.homedir()}`)
console.log(`host name ${os.hostname()}`)
console.log(`network interfaces ${util.inspect(os.networkInterfaces())}`)
console.log(`OS platform ${os.platform()}`)
console.log(`OS uptime ${os.uptime()}`)
console.log(`user info ${util.inspect(os.userInfo())}`)
