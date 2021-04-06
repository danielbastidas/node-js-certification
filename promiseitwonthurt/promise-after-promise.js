const firstPromise = first()
const secondPromise = firstPromise.then(value => second(value))
secondPromise.then(console.log)