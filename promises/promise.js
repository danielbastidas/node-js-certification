// const { resolve } = require("path");

const myPromise = new Promise((resolve, reject) => {

    try {
        setTimeout(() => {
            resolve("I promised!")
        }, 1000)
    } catch (error) {
        reject(error)
    }

})

myPromise
    .then(data => console.log(data))
    .catch(error => console.log(error))