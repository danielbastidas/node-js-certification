let parsePromised = () => {
    const promise = new Promise((resolve, reject) => {
        try {
            const parsedValue = JSON.parse(process.argv[2])
            resolve(parsedValue)
        } catch (error) {
            reject(error)
        }
    })

    return promise
}

parsePromised()
    .then(console.log)
    .catch(error => console.log(error.message))