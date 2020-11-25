// ES6 Classes

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.author} wrote book titled ${this.title} in year ${this.year}!`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old!`;
    }

    revise(releaseYear) {
        this.year = releaseYear;
        this.revised = true;
    }

    // static method in es6
    static topBookStore() {
        return "Crosswords";
    }
}

const book1 = new Book("Book12", "Alice Balanciaga", "2014");
console.log(book1.getSummary());

console.log(book1.getAge());

book1.revise("2020");
console.log(book1);

// static method call
console.log(Book.topBookStore());

// Subclass
class Magzine extends Book {
    constructor(title, author, year, price, genre) {
        super(title, author, year); // call to parent class constructor
        
        this.price = price;
        this.genre = genre;
    }
}

const mag1 = new Magzine("Chernobyl - The Nuclear Disaster", "Khomyuk", "1981");
console.log(mag1);