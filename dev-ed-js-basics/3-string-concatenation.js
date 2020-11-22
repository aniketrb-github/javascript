
var name = "Aniket";
var age = 27;
// Traditional Way to concatenate Strings | We need to escape the single quote with \ & then its usable otherwise gives error
console.log("Hello my name is "+name+". It\'s exciting to learn JavaScript from YT:Dev Ed.");


// Modern way to concatenate Strings
console.log(`Hello, My name is ${name} and It's been an amazing experience of learning JavaScript with Edwin`)

console.log(typeof name);
console.log(typeof age);
var combined = name + age;
console.log(typeof combined);

// old way: we need to escape special characters like ‘ or “ and also need to manage white spaces manually & also need to append with + sign
var name = "Aniket";
console.log("My name is \""+name+"\". It\'s been great to work with \"Edwin\" so far.");

// ES-6 new Way: Here the white spaces are managed along with the escape characters being resolved & no + to use. Instead use the ${variable}
console.log(`Hello, My name is "${name}" and It's been an amazing experience of learning JavaScript with "Edwin".`)
