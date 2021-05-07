try {
    const jsonString = fs.readFileSync("./customer.json");
    const customer = JSON.parse(jsonString);
} catch (err) {
    console.log(err);
    return;
}
console.log(customer.address); // => "Infinity Loop Drive"