// ----------- Classes in JavaScript ES6  ----------- 

class SoccerClub {
    // constructor
    constructor (numberOfPlayers, division, version) {
        this.numberOfPlayers = numberOfPlayers;
        this.division = division;           
        this.version = version;
    }
    // method
    printClubDetails() {
        // Template Literal - es6 feature
        console.log(`A club can have ${this.numberOfPlayers} players in the ${this.division} division of ${this.version} version.`);
    }
}

// Object creation - The ES6 way
const soccerClub = new SoccerClub("30", "Second", "ES6 NEW JS");
soccerClub.printClubDetails();

// Inheritance in ES6 similar to OOPS
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