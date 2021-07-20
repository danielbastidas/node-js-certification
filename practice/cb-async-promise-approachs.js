// # using callbacks
// function hello(cb) {
//     const timeOut = Math.floor(Math.random() * 100) + 1;
//     setTimeout(() => {
//         console.log('hello');
//         cb()
//     }, timeOut);
// }

// function world() {
//     const timeOut = Math.floor(Math.random() * 100) + 1;
//     setTimeout(() => {
//         console.log('world');
//     }, timeOut);
// }


// hello(() => world())

// # using promises
// function hello() {
//     return new Promise((resolve, reject) => {
//         const timeOut = Math.floor(Math.random() * 100) + 1;
//         setTimeout(() => {
//             console.log('hello');
//             resolve()
//         }, timeOut);
//     })
// }

// function world() {
//     const timeOut = Math.floor(Math.random() * 100) + 1;
//     setTimeout(() => {
//         console.log('world');
//     }, timeOut);
// }

// hello().then(() => world())

// # using async await
function hello() {

    return new Promise((resolve, reject) => {
        const timeOut = Math.floor(Math.random() * 100) + 1;
        setTimeout(() => {
            console.log('hello');
            resolve()
        }, timeOut);
    })

}

function world() {
    return new Promise((resolve, reject) => {
        const timeOut = Math.floor(Math.random() * 100) + 1;
        setTimeout(() => {
            console.log('world');
            resolve()
        }, timeOut);
    })
}

async function helloWorld() {
    await hello()
    await world()
}

helloWorld()