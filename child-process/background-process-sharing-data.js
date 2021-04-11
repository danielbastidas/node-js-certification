var count = 0
const interval = setInterval(() => {
    console.log(`doing some background process ${count}`)
    count++
}, 1000)

const stopInterval = setInterval(() => {
    if (count == 10) {
        console.log(`background process ends ${count}`)
        clearInterval(interval)
        done()
    }
}, 1000)

function done() {
    clearInterval(stopInterval)
    process.send(count)
}

process.on('message', data => {
    count = data
})