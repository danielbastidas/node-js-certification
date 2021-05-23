function classroom(teacher) {
    return function study() {
        console.log(
            `${teacher} says to study ${this.topic}`
        );
    };
}
var assignment = classroom("Kyle");
/** the following should print Kyle says to study undefined because the function study is invoked using the  
 * default context pf the function that is the window object in javascript that does not contains a topic
 * attibute */

assignment()

var homework = {
    topic: "JS",
    assignment: assignment
};

/** The following should print Kyle says to study JS because now the assignment function is provided 
 * with a context. Invoked from the homework object
 */
homework.assignment();

var otherHomework = {
    topic: "Math"
};

/** The following should pring Kyle says to study Math because we are invoking the function using the call
 * method and providing a context object
 */
assignment.call(otherHomework);
