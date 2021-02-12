const requestPromise = require("request-promise");
const { RequestError, StatusCodeError } = require("request-promise/errors");

var requestOptions = {
    baseUrl: "https://jsonplaceholder.typicode.com",
    json: true,
    resolveWithFullResponse: true
}

// const defaultRequest = requestPromise.defaults(requestOptions)

const defaultRequest = requestPromise.defaults(requestOptions)
// in case you need to add options later
requestOptions.qs = { id: 5 };

// Receive the answer as a response object if you need to retrieve more info from the response
defaultRequest("/todos")
    .then(response => {
        console.log('As Response:')
        console.log(`Response status: ${response.statusCode}`)
        console.log('Response data:' + JSON.stringify(response.body))
    })
    .catch(error => console.log(error))

// Receive the answer as a json object
requestOptions.resolveWithFullResponse = false
defaultRequest("/todos")
    .then(body => {
        console.log('As data:')
        console.log(`data: ${JSON.stringify(body)}`)
    })
    .catch(error => console.log(error))

/** In this case the error handler will be ignore, even if there is an error it will be 
 * dispatched to the then method (resolved)
 */
requestOptions.simple = true
defaultRequest("/todosX")
    .then(console.log('Error Handling simple = true'))
    .catch(error => {
        console.log('As error handling:')
        if (error instanceof RequestError) {
            console.log(`Error with the request: ${error}`)
        } else if (error instanceof StatusCodeError) {
            console.log(`Error with the response: ${error}`)
        }
    })

/** In this case the error handler will receive the error, as you might expect
 */
requestOptions.simple = false
defaultRequest("/todosX")
    .then(body => console.log('Error Handling simple = false'))
    .catch(error => {
        console.log('As error handling:')
        if (error instanceof RequestError) {
            console.log(`Error with the request: ${error}`)
        } else if (error instanceof StatusCodeError) {
            console.log(`Error with the response: ${error}`)
        }
    })