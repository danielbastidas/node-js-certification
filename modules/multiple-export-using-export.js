/** Notice that you can use the exports alias object to export code.
 * Note: you cannot mix both techniques to export code (module.exports and exports at the same time)
 * because you will override your previous exports statements
 */
exports.add = function (x, y) {
    return x + y
};
exports.subtract = function (x, y) {
    return x - y
};
exports.multiplyByTwo = function (x) {
    return x * 2
};