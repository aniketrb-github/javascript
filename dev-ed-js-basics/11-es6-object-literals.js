// ----------- Object Literals - Old Way ----------- 
function getBookDetails (name, author, price, version) {
    return {
        name: name,
        author: author,
        price: price,
        version: version
    }
}
//console.log(getBookDetails("Rich Dad Poor Dad", "Robert Kiyosaki", "$15", "oldJS-Vanila"));

// ----------- Object Literals - NEW ES-6 Way ----------- 
function getBookDetails (name, author, price, version) {
    return {
        name,
        author,
        price,
        version
    }
}
//console.log(getBookDetails ("Rich Dad Poor Dad", "Robert Kiyosaki", "$15", "ES-6"));

// we dont need to repeat the parameter assignments like old way


console.log('start');

const items = [1,2,3,4];

// Synchronous code block
console.log(`Synchronous Block: Print items via forEach loop: `);
items.forEach( item => console.log('fe-synch:'+item) );

// Asynchronous code block
console.log(`Asynchronous Block: Print items via forEach loop: `);
setTimeout( () => {
    items.forEach( item => console.log('fe-asynch-'+item) );
}, 100);

console.log('end');
