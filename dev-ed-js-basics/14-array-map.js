// ----------- ES-6 Array ----------- 
let fruitList = ["apples", "papayas", "mangoes", "bananas", "oranges"];
console.log("Original Fruits List:");
// ForEach - here we can iterate on each product in linear style
fruitList.forEach((product, index) => {
    console.log(`${index} - ${product}`);
});

console.log("Fruits without index(Single Param Arrow Function):");
fruitList.forEach( product => console.log(`${product}`) );

// Map - Get list, we can update this data before storing it in map
let updatedFruitList = fruitList.map((product, index) => {
    if(index % 2 == 0)
        return "fresh "+product;
    else
        return product;
});

console.log("Updated Fruits List:");
updatedFruitList.forEach((updatedProduct, index) => {
    console.log(index+" - "+updatedProduct);
});

// ----------- Filter in ES6 - FILTER: GET FRESH FRUITS ONLY ----------- 
const freshFruitsFilteredList = updatedFruitList.filter((product) => {
    if(product.startsWith("fresh"))
        return product;
});

console.log(`FILTERED FRUITS LIST IS BELOW:`);
freshFruitsFilteredList.forEach( filteredItem => {
    console.log(filteredItem);
});


