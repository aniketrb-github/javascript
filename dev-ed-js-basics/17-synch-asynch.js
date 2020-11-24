
// Synchronous & Asynchronous Code Blocks

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
