/** This example provides a library implemention for the series pattern. A task is executed
 * after the other one
 */

// The series functionality provided by the library
function series(callbacks, last) {
    var results = [];
    function next() {
        var callback = callbacks.shift();
        if (callback) {
            callback(function () {
                results.push(Array.prototype.slice.call(arguments));
                next();
            });
        } else {
            last(results);
        }
    }
    next();
}

// This method invokes the task method
async function async(arg, callback) {
    var delay = Math.floor(Math.random() * 5 + 1) * 100; // random ms
    console.log('async with \'' + arg + '\', return in ' + delay + ' ms');
    // setTimeout(function () { callback(arg * 2); }, delay);
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
    return result
}

/** The amount of task to be invoked with their initial parameter
 * In this case there are 6 task to be executed with parameters from 1 to 6
 */
series([
    function (next) { async(1, next); },
    function (next) { async(2, next); },
    function (next) { async(3, next); },
    function (next) { async(4, next); },
    function (next) { async(5, next); },
    function (next) { async(6, next); }
], final);