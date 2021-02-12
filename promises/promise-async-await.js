/** This example show how to use asynch await instead of promises to execute a task in background */
const fetch = require('node-fetch')

function initApp(data) {
    console.log(`The app can be initialized using the following data: ${data}`)
}

const load = async function () {
    const data = await fetch('https//jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => JSON.stringify(res))
    // initApp(data)
    return data
}

// load()

// Once the data has been loaded initialize the app
load()
    .then(data => initApp(data))
    .catch(error => console.dir(`There was an error: ${error.msg()}`))