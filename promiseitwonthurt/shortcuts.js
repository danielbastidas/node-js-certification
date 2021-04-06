const successPromise = Promise.resolve('Success')
const failPromise = Promise.reject(new Error('Fail'))

failPromise.catch(error => console.log(error.message))