const myPromise = new Promise((resolve, reject) => {

    try {
        setTimeout(() => {
            reject(new Error("REJECTED!"))
        }, 300)
    } catch (error) {
        reject(error)
    }

})

let rejected = error => console.log(error.message)

myPromise
    .then(data => console.log(data), rejected)