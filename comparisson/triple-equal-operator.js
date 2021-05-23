/** The triple equality operator does not allows coercion (conversion from one data type to other).
 * For example look at the following comparissons
 */
// no coercion
42 === "42";            // false
true === 1;             // false
0 === null;             // false
"" === null;            // false
null === undefined;     // false

/** The doble equal operator does perform a coercion (conversion from one data tupe to another) before comparing values */
// coercion
42 == "42";             // true
1 == true;              // true