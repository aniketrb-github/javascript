function Book(name, year, author, count) {
    this.name = name;
    this.year = year;
    this.author = author;
    this.count = count;
}

Book.prototype.getSummary = function(){
    return `${this.author} wrote his book no. ${this.count} named ${this.name} in year ${this.year}!`;
}

// Inheritance Magzine inherits Book
function Magazine(name, year, author, count, genre) {
    // passing Magazigne as "this" object to Book using call() method of Book
    Book.call(this, name, year, author, count);
    this.genre = genre;
}
// to inherit all methods from Book into Magazine
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("The Lost child", "2024", "Aniket Bharsakale", 3, "Horror",);
console.log(mag1.genre);
console.log(mag1.getSummary());

// Untill this line, Magazine uses the Book's constructor to create its objects
// Now Magzine will have its own constructor, check in console in proto
Magazine.prototype.constructor = Magazine;