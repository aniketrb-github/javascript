function Book(name, year, author, count) {
    this.name = name;
    this.year = year;
    this.author = author;
    this.count = count;
}

// Syntax to create a function constructor | this is recommended approach
Book.prototype.getSummary = function(){
    console.log(`${this.author} wrote his book no. ${this.count} named ${this.name} in year ${this.year}!`);
}

// object creation
const shadowed = new Book("Shadowed", "2024", "Aniket Bharsakale", 1);
const theComeBack = new Book("The Come Back", "2026", "Aniket Bharsakale", 2);

// invoking the prototype category methods of objects
shadowed.getSummary();
// these methods are now in the prototype section of the object & not in the field attribute section
// hence it makes it loose coupled & all objects only have name, year, author count etc attributes & functions are kept separate
theComeBack.getSummary();

// we are able to add new field attributes by just assigning new values to new variables
Book.prototype.newUpdateRelease = function(yearOfRelease){
    this.year = yearOfRelease;
    this.revised = true;
}

shadowed.newUpdateRelease(2025);
console.log(shadowed);
console.log(theComeBack);

