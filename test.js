const fetch = require("node-fetch");
var assert = require('assert')
const net = require('net')

let f = (ip4addr, tcpPort, timeout, callback) => {
    assert.equal(typeof (ip4addr), 'string',
        "argument 'ip4addr' must be a string");
    assert.ok(net.isIPv4(ip4addr),
        "argument 'ip4addr' must be a valid IPv4 address");
    assert.equal(typeof (tcpPort), 'number',
        "argument 'tcpPort' must be a number");
    assert.ok(!isNaN(tcpPort) && tcpPort > 0 && tcpPort < 65536,
        "argument 'tcpPort' must be a positive integer between 1 and 65535");
    assert.equal(typeof (timeout), 'number',
        "argument 'timeout' must be a number");
    assert.ok(!isNaN(timeout) && timeout > 0,
        "argument 'timeout' must be a positive integer");
    assert.equal(typeof (callback), 'function', "You should pass a function as callback");
    // throw new Error('My Test error')
}

async function syncRun() {
    await fetch('url')
}

// for (let i = 0; i < 1e9; i++) {
//     f()
//     console.log(i)
// }

f('127.0.0.1', 30000, 100, () => { console.log("yellow") })

const func = () => {
    return new Promise((resolve, reject) => {
        setImmediate(() => {
            throw new Error('foo');
        });
    });
};


const main = async () => {
    try {
        await func();
    } catch (ex) {
        console.log('will not execute');
    }
};

main();