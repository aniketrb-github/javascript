
// This is an Object Literal of ES5 | ignore the file name

const book1 = {
    name: "The Subtle art of not giving a Fcuk",
    author: "Mark Manson",
    year: 2018,
    getDetails: function(){
        // This is a template literal which is ES6 feature
        return `${this.author} wrote the book '${this.name}' in year ${this.year}.`;
    }
};

console.log(book1); 
console.log(book1.author);
console.log(book1.getDetails());    // executes the method of this object literal
console.log(Object.keys(book1));    // prints keys of the object literal
console.log(Object.values(book1));  // prrints values of the object literal
