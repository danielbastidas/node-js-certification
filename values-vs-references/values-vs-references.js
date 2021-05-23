/** primitive values are always passed by value or copied. Look the following example */

var myName = "Kyle";

var yourName = myName;

myName = "Frank";

console.log(myName); // Frank

console.log(yourName); // Kyle

/** objects, functions and arrays (object values) are treated as references */
var myAddress = {
    street: "123 JS Blvd",
    city: "Austin",
    state: "TX"
};

var yourAddress = myAddress;

myAddress.street = "456 TS Ave"; // I've got to move to a new house!

console.log(yourAddress.street); // 456 TS Ave
