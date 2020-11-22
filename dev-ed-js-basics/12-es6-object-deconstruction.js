
// ----------- Object deconstruction ----------- 
// Old JS way
/*
var personalInformation = {
    name: "Aniket",
    age: 23,
    gender: "Male",
    country: "India"
}
var name = personalInformation.name;
console.log("\nOld JS way\nName: "+name);

// ES-6 New Way : Object deconstruction
let userPersonalInformation = {
    fullName: "Aniket Bharsakale",
    age: 23,
    gender: "Male",
    country: "India",
    contactNo: 10237107403284,
    isPassportAvailable: true,
    isEmployed: false
}
let fullUserInfo = userPersonalInformation; // gets the entire Object as is
let {contactNo, age, isEmployed} = userPersonalInformation; // gets only the specified fields
const {fullName} = userPersonalInformation  // to get single field also, we need the curly braces
console.log(`\nES-6 New Way\nName: ${fullName} \nContact Number: ${contactNo}\n`);
age = age + 1
isEmployed = true;
console.log(`Age: ${age}\nisEmployed: ${isEmployed}`);


// ----------- OLD JS - this keyword ----------- 
var person = {
    firstName: "Roger",
    lastName: "Stankovic",
    age: 24,
    printAge: function() {
        console.log("Age: "+this.age);
        that = this;    // we need to rejuvenate the this reference again & reuse it
        // here, 'this' is redefined | its scope gets redefined to printAge() block level
        var fullName = function() {
            console.log("Old JS Workaround - "+that.firstName+" "+that.lastName);
            
            console.log("Old JS 'this' issue - "+this.firstName+" "+this.lastName);
        };
        fullName();
    }
};
person.printAge();
*/

// ----------- this keyword - ES-6 New ----------- 
console.log(`ES-6 - 'this' KEYWORD USAGE`);
const human = {
    fName: "Joachim",
    lName: "Lowe",
    ageInYears: 57,
    countryOrigin: "Germany",
    occupation: "Football Club Manager",
    isCurrentlyEmployed: true,
    isActive: true,

    // regular old JS function with a arrow function inside it - VALID
    printDetails: function(){
        // arrow function
        printFullName = () => {
            // inside an arrow funciton, the scope of 'this' keyword is not re-defined & hence it behaves as expected
            console.log(`ArrowFunction | FullName: ${this.fName} ${this.lName}`);  // valid & yeilds the fName and lName as is
        }        
        printFullName();
        
        console.log(`Age: ${this.ageInYears} | Country Origin: ${this.countryOrigin}`);
    }
}
human.printDetails();

const printOtherDetails = () => console.log("isCurrentlyEmployed : ", human.isCurrentlyEmployed);
printOtherDetails(human);




