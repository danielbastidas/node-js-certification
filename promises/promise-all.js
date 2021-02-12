/** This example show how to wait for several concurrent requests to complete using promise all */
const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/todos";
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fetch returns a Promise.
const getTodo = id => fetch(`${url}/${id}`).then(res => res.json());

// Map over our ids, returning a promise for each one.
const arrayOfPromises = ids.map(id => getTodo(id));

Promise.all(arrayOfPromises)
    .then(todos => todos.map(todo => todo.title))
    .then(titles => console.log(titles)) // logs titles from all the todos
    .catch(err => console.log(err));