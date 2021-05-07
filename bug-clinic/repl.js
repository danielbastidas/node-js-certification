var replify = require("replify");
// var replpad = require("replpad");

module.exports = scenario;

function scenario(callback) {
    var createServer = require("http").createServer;

    var server = createServer((req, res) => {
        res.end('whatever')
    });


    server.__message = 'REPLs are neat'

    var repl = replify({ name: 'bug-clinic' }, server)

    server.listen(8080, () => {
        callback(server, repl);
    })

}