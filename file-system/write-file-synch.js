const fs = require('fs')
const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}
// notice how to pretty pring the json
const jsonString = JSON.stringify(customer, null, 2)
fs.writeFileSync('./newCustomer.json', jsonString)