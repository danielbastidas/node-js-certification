const all = (promiseOne, promiseTwo) => {

    return new Promise((resolve, reject) => {
        var counter = 0;
        var array = []

        promiseOne.then(value => {
            counter++
            array[0] = value

            if (counter == 2) {
                resolve(array)
            }
        })

        promiseTwo.then(value => {
            counter++
            array[1] = value

            if (counter == 2) {
                resolve(array)
            }
        })

    })

}

all(getPromise1(), getPromise2())
    .then(console.log)