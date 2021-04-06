const myPromise = new Promise((resolve, reject) => {

    resolve('PROMISE VALUE')
    reject(new Error('I DID NOT FIRE'))

})

myPromise.then(console.log)

console.log('MAIN PROGRAM')