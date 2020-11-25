//  Following are just 2 different ways to create objects i.e by using the Object.create();
// Both achieve the same thing i.e object creation via Object.create();

// Method-1
const bookProtos = {
    getSummary() {
        return `${this.author} wrote book titled ${this.title} in year ${this.year}!`;
    },

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old!`;
    },

    revise(releaseYear) {
        this.year = releaseYear;
        this.revised = true;
    } 
};

// Create Object mehtod usage
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "Erling Halland";
book1.year = "2001";

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise(2020);
console.log(book1);


// Method-2
const book2 = Object.create(bookProtos, {
    title:{value: "Book Two"},
    author:{value: "Jimmy Lowe"},
    year:{value: "2020"},
});

console.log(book2);