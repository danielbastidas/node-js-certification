/** ES6 modules are single instance by default when imported.
 * To create a multiple instance module do the following
 */

function printDetails(title, author, pubDate) {
    console.log(`
        Title: ${title}
        By: ${author}
        ${pubDate}
    `);
}

/** This is where the multiple instance creation magic happens */
export function create(title, author, pubDate) {
    var publicAPI = {
        print() {
            printDetails(title, author, pubDate);
        }
    };

    return publicAPI;
}