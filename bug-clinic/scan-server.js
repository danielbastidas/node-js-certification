/** You can debug a node internal module passing the name of the module when executing your program
 * NODE_DEBUG=http node server-scan.js
 */

var createServer = require("http").createServer;
var server = createServer(function (req, res) {
    res.end("hello");
});
server.listen(9876, function () {
    console.log("listening");
});