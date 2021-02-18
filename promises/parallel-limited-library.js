/** This example provides a library to execute tasks in parallel in a limited way (at most N task at
 * the same time) */

// The library function or how it works
function limited(limit, callbacks, last) {
    var results = [];
    var running = 1;
    var task = 0;
    function next() {
        running--;
        if (task == callbacks.length && running == 0) {
            last(results);
        }
        while (running < limit && callbacks[task]) {
            var callback = callbacks[task];
            (function (index) {
                callback(function () {
                    results[index] = Array.prototype.slice.call(arguments);
                    next();
                });
            })(task);
            task++;
            running++;
        }
    }
    next();
}
// Invokes the task method
async function async(arg, callback) {
    // var delay = Math.floor(Math.random() * 5 + 1) * 1000; // random ms
    // console.log('async with \'' + arg + '\', return in ' + delay + ' ms');
    // setTimeout(function () {
    //     var result = arg * 2;
    //     console.log('Return with \'' + arg + '\', result ' + result);
    //     callback(result);
    // }, delay);
    callback(await taskMethod(arg))
}

function final(results) { console.log('Done', results); }

// the task you want to execute in series
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
    console.log(`Task with arg=${arg} finishes`)
    return result
}

// Executes at most 3 task at the same time
limited(3, [
    function (next) { async(1, next); },
    function (next) { async(2, next); },
    function (next) { async(3, next); },
    function (next) { async(4, next); },
    function (next) { async(5, next); },
    function (next) { async(6, next); }
], final);