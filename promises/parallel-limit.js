/** This example shows how to execute parallel task but limiting the maximum amount of task that can be executed 
 * at a time */
async function async(arg, callback) {
    console.log('do something with \'' + arg + '\', return 1 sec later');
    // setTimeout(function () { callback(taskMethod(arg)); }, 3000);
    callback(await taskMethod(arg))
}

function final() { console.log('Done', results); }

var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

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
                }, (Math.random() * 5 + 1) * 1000)

            } catch (error) {
                reject(error)
            }

        })
    }

    const result = await myPromiseFunct()
    return result
}

function launcher() {
    while (running < limit && items.length > 0) {
        var item = items.shift();
        async(item, function (result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running == 0) {
                final();
            }
        });
        running++;
    }
}

launcher()