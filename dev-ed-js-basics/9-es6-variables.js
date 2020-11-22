// ----------- Variables ----------- 
// global variable | global scope
var counter = 10;

counter = 1213;
console.log("counter: "+counter);

// we are able to re-declare same vairable name again which is bad
var counter = 12;   // redefinition of same counter variable again is possible for 'var'
console.log("counter: "+counter);

// block scope
function printName(name) {
    var randomNum = Math.random();  // local scope
    console.log("Hi "+name+". You hold bitcoins quantity of: "+randomNum);
}
printName("Aniket");
// console.log("counter: "+randomNum); // error in console due to scope issue for randomNum

// here, var bleeds out of block scope & is available outside for loop too which is bad
for(var i=0; i<5; i++) {
    console.log("counter"+i);
}
console.log("counter outside forloop: "+i);

// ES-6
for(let j=0; j<5; j++) {
    console.log("es6-let: "+j);
}
// console.log("counter outside forloop: "+j);  // gives error: j is undefined

const countryName = "India";
// countryName = "Canada";          // Invalid - Uncaught TypeError: Assignment to constant variable.
// const countryName = "Poland";    // Invalid - Uncaught SyntaxError: Identifier 'countryName' has already been declared

let stateName = "Maharashtra";
stateName = "Haryana";              // Valid

// let stateName = "Assam";    // Invalid - Uncaught SyntaxError: Identifier 'stateName' has already been declared
