
let name = "Aniket Ramdas Bharsakale";
const gender = "Male";
let age = 27;

function convertToUpperCase(name) {
    const upperCasedName = name.toUpperCase();
    console.log("Upper cased full name: "+upperCasedName);
}

// Modern way to write function
const printName =  name => {
    console.log("Name: "+(name.toUpperCase()) );
}

// Modern way to write function using arrow notation
const printPersonalDetails =  (name, age, gender) => {
    // Modern way of using the console.log()
    console.log(`\tName: ${name.toLowerCase()}\n\tAge: ${age}\n\tGender: ${gender}`);
}

// Function invocations
convertToUpperCase(name);
printName(name);
printPersonalDetails(name, age, gender);

// (A) - Traditional Way to write a function
const varName = function(name, age, gender) {
    // . . .
}

// (B) - Modern New way which simplifies (A) style function
const varName = (name, age, gender) => {
    // . . . 
}

// (C) - More improvement done on (B) style
const varName = () => {
    // . . . 
}



// (D) - More improvement on (C) style
const varName2 = singleVar => console.log("No need of curly braces for a single line function.");
