/** This example show how to execute one task after the other but using the answer of the previous
 * task as argument/input of the following task
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
                    resolve(arg)
                }, 1000)

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

/** This pattern allow you to execute each task in a sequential (serie) way (one after the other)
 * The function parameter represents the input of the first task to be executed
 */
function series(arg) {

    // If there is a parameter then the next task should be invoked
    if (arg) {

        // invoke the next task function
        asynch(arg, function (arg) {
            results.push(arg);
            return series(args.shift());
        });

    } else {
        return final(results)
    }

}

series(args.shift())