// Array in JS
var names = ["Sam", "Dom", "Tac", "Mac"];
console.log(`Array of Names: ${names}`);    // Prints a String with array names comma separated

// Less recommended way to define an Array
var fruits = new Array("apple", "mango", "banana");
console.log(fruits)

// Add elements to the array
names.push("Ronaldo");
names.push("Messi");
names.push("Neymar");
console.log(names);

// This removes the last item/latest added item from the array(stack)
names.pop();
console.log("After pop(): {"+names+"} Neymar is popped from the arrays last position");

// removes element from start of the array
names.shift();
console.log(`After shift(): {${names}} -- Sam is being removed from start of the array`);

// adds element to the start of the array
names.unshift("Rashford");
console.log("Added new name at start of the array: {"+names+"}");

console.log("Index number of Ronaldo: "+names.indexOf("Ronaldo"));