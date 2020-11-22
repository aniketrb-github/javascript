// ----------- Default Parameters ----------- 
// Old way
function multiply(a, b) {
    var x = a || 1; // If nothing is passed then default value is 1 for a & b
    var y = b || 1;
    return x * y;
}
console.log("14*10 = "+multiply(14,10));    // prints 140
console.log("No params passed to multiply( ) = "+multiply());   // prints 1

// ----------- New Way - ES6 ----------- 

const sum = (a = 1, b = 1) => {
    return a+b;
}

console.log("ES6 Regular SUM  = "+sum(10, 10));
console.log("ES6 Default SUM = "+sum());