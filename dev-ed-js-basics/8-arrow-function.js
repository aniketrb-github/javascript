// ----------- Old functions vs. Arrow functions in ES6 ----------- 
var a = 10; var b = 5;

// regular function with 2 or more params
function sum(a, b ) {
    return a + b;
}

// optimized arrow function with 2 params
const sum2 = (a, b) => a + b

// regular function with 1 param
function isPositive(number) {
    return number >= 0;
}

// optimized arrow function with 1 param
let isPositive2 = number => number >= 0;

// regular function with 0 param
function randomNumber () {
    return Math.random;
}
// optimized arrow function with 0 param
const randomNumber2 = () => Math.random;

// anonymous function which is a callback function
document.addEventListener('click', function(){
    console.log("Click");
});

// arrow function which is a callback function
document.addEventListener('click', () => console.log("Click"));


// ----------------------------------------------------------------------------
// 'this' in regular function and 'this' in arrow function

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrowFunction() {
        setTimeout(() => {
            console.log("Arrow: "+this.name);
        }, 100);
    }

    printNameRegularFunction() {
        setTimeout(function(){
            console.log("Function: "+this.name);
        }, 100);
    }    
}

let person = new Person("Roger");
person.printNameArrowFunction();
person.printNameRegularFunction();
console.log(this.name);

/*
"Standard JS function syntax defines 'this' based on from where the function is invoked.""
the method execution "person.printNameRegularFunction();" is from GLOBAL scope & hence in regular JS function the 'this' gets redefined
We should not use the 'this' keyword inside a Standard JS function since 'this' gets redefined in that context & there is a different behaviour

Whereas in Arrow function, the 'this' does not get/is not redefined. It does not matter from where a function is invoked.
For arrow function, be it any scope the this works just as expected unlike that in some regular js function/block scoped scenario
*/