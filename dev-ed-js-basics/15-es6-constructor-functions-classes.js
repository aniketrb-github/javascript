
// ----------- Old way - Constructor Functions ----------- 
function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
}

// a method of Person class
Person.prototype.printName = function(version) {
    console.log("Name: "+this.name+" from "+version+" version");
};

var Ed = new Person("Ed", 23, "Denmark");

Ed.printName("OLD JS VANILLA");

// function Employee -> (extends) funciton Person
function Employee(empId, designation, contactNum, name, age, country) { // add fields of Person here
    Person.call(this, name, age, country);  // this entends the Person inside Employee
    this.empId;
    this.designation;
    this.contactNum;
    // we need to copy paste the fields of Person to Employee param list
}
// this inherits all the functions from Person to Employee
Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("P14S63XZ", "Manager", 537021987074, "Roger", 23, "Ireland");

emp.printName("OLD JS VANILLA");

// ----------- ES6 NEW WAY ----------- 

class SoccerClub {
    constructor (numberOfPlayers, division, version) {
        this.numberOfPlayers = numberOfPlayers;
        this.division = division;           
        this.version = version;
    }

    printClubDetails() {
        console.log(`A club can have ${this.numberOfPlayers} players in the ${this.division} division of ${this.version} version.`);
    }
}

// Object creation by New ES6 way
const soccerClub = new SoccerClub("30", "Second", "ES6 NEW JS");
soccerClub.printClubDetails();

class DynamitesSC extends SoccerClub {
    constructor(clubName, numberOfPlayers, division, version) {
        super(numberOfPlayers, division, version);
        this.clubName = clubName;         
    }

    printDynamitesDetails(version) {
        console.log(`Clubname: ${this.clubName} from ${this.version} version.`);
    }
}

// Object creation by New ES6 way
const dynamitesSC = new DynamitesSC("Dynamites S.C.", 30, "Second", "ES6 NEW JS");
dynamitesSC.printDynamitesDetails();
dynamitesSC.printClubDetails();