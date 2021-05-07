const traces = require('./traces')
// var domain = require("domain");
// const stackup = require('stackup')

const callback = (error) => {
    if (error) console.error(error)
}

traces({ path: 123, }, callback)
