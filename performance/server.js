/** this application was tested with autocannon in the following way:
 * autocannon -c 100 -m POST -H 'content-type=application/json' -b '{ "hello": "world"}' http://localhost:3000/echo
 */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/echo', (req, res) => {
    res.send(req.body)
})

app.listen(3000)