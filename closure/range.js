function range(start, end) {

    if (end === undefined || end == null) {
        return function closingRange(end) {
            return getRange(start, end)
        }
    } else {
        return getRange(start, end)
    }

}

function getRange(start, end) {
    let array = []

    for (let i = start; i <= end; i++) {
        array.push(i)
    }

    return array
}

console.dir(`${range(3, 3)} should be: [3]`)    // [3]
console.dir(`${range(3, 8)} should be: [3,4,5,6,7,8]`)    // [3,4,5,6,7,8]
console.dir(`${range(3, 0)} should be: []`)    // []

var start3 = range(3);
var start4 = range(4);

console.dir(`${start3(3)} should be: [3]`)    // [3]
console.dir(`${start3(8)} should be: [3,4,5,6,7,8]`)    // [3,4,5,6,7,8]
console.dir(`${start3(0)} should be: []`)    // []
console.dir(`${start4(6)} should be: [4,5,6]`)    // [4,5,6]