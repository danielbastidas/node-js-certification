const promise = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve('FULFILLED!')
        }, 300)
    } catch (error) {
        reject(error)
    }

})

promise
    .then(console.log)
    .catch(console.log)