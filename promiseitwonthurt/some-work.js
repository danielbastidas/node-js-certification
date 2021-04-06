const { resolve } = require("q-io/fs")
const qhttp = require("q-io/http")

const promise1 = qhttp.read("http://localhost:7000")

const getUser = id => {
    return new Promise((resolve, reject) => {
        qhttp.read("http://localhost:7001/" + id)
            .then(resolve)
            .catch(reject)
    })
}

promise1.then(getUser)
    .then(user => console.log(JSON.parse(user)))
    .catch(error => console.log(error.message))


