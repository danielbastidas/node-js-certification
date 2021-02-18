/** This example shows how to launch several task in parallel and wait for all of them to complete. 
 * In this example the return value of each task is not passed as input parameter to the next task.
 * If you want the returned value of the previous task you can use chained promises. 
 * e.g promise().then(val => nextPromise(vale))
 */

// The five task with their input
const args = [1, 2, 3, 4, 5]
// Where the result of all the taks will be stored
var results = []

/** this method invokes every tasks with it's input (taskMethod(arg)) and then call the next task in the sequence
 * callback with the result of the previous task */
async function asynch(arg, callback) {
    callback(await taskMethod(arg))
}

/** This method contains the logic of the task to be executed.
 * Notice that is simulating an asynchronous invokation that takes 1 second to execute
 */
const taskMethod = async function (arg) {

    console.log(`Invoking task ${arg}`)
    let myPromiseFunct = function () {
        return new Promise((resolve, reject) => {

            try {

                setTimeout(function () {
                    arg *= 2
                    return resolve(arg)
                    // simulates waiting for task response between 1 and 6 seconds
                }, (Math.random() * 5 + 1) * 1000)

            } catch (error) {
                reject(error)
            }

        })
    }

    const result = await myPromiseFunct()
    return result

}

/** Execute this function after all the tasks have been completed. With the output of each
 * task (results)
 */
function final(results) {
    console.log(`Done: ${results}`)
}

args.forEach(arg => {

    asynch(arg, function (arg) {
        results.push(arg);
        if (results.length == args.length) {
            final(results)
        }
    })

})