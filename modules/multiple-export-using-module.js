/** Notice that you can use the module object to export code.
 * Note: you cannot mix both techniques to export code (module.exports and exports at the same time)
 * because you will override your previous exports statements
 */
const add = function (x, y) {
    return x + y
};
const subtract = function (x, y) {
    return x - y
};
const multiplyByTwo = function (x) {
    return x * 2
};

module.exports = {
    add,
    subtract,
    multiplyByTwo
}