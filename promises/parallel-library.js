/** This example provides a library to execute task in parallel and collect their results in order */

// the library function
function fullParallel(callbacks, last) {
    var results = [];
    var result_count = 0;
    callbacks.forEach(function (callback, index) {
        callback(function () {
            results[index] = Array.prototype.slice.call(arguments);
            result_count++;
            if (result_count == callbacks.length) {
                last(results);
            }
        });
    });
}

// Invokes the task method with the appropriate parameters
async function async(arg, callback) {
    //   var delay = Math.floor(Math.random() * 5 + 1) * 100; // random ms
    //   console.log('async with \''+arg+'\', return in '+delay+' ms');
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
    console.log(`Task with arg=${arg} finishes`)
    return result
}

// Execute all the task in parallel, though the results are collected sequentially
fullParallel([
    function (next) { async(1, next); },
    function (next) { async(2, next); },
    function (next) { async(3, next); },
    function (next) { async(4, next); },
    function (next) { async(5, next); },
    function (next) { async(6, next); }
], final);