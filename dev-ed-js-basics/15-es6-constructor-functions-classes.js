
// ----------- Constructor Functions ----------- 
function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
}

// a method of Person class
Person.prototype.printName = function() {
    console.log("Name: "+this.name);
};

// a method of Person class
Person.prototype.printCountry = function() {
    console.log("Country: "+this.country);
};

var Edwin = new Person("Edwin", 23, "Denmark");
Edwin.printName();
Edwin.printCountry();

// ctor function Employee (extends) ctor function Person
function Employee(empId, designation, contactNum, name, age, country) { // add fields of Person here
    Person.call(this, name, age, country);  // constructor Employee extends constructor Person
    this.empId = empId;
    this.designatio = designation;
    this.contactNum = contactNum;
    // we need to copy paste the fields of Person to Employee param list explicitly
}
// this inherits all the methods from Person to Employee
Employee.prototype = Object.create(Person.prototype);
// a method of Employee class
Employee.prototype.printEmpDetails = function() {
    console.log("name: "+this.name+"| empId: "+this.empId+" | designation: "+this.designation+" | contactNum: "+this.contactNum+"| " );
};

const emp = new Employee("P14S63XZ", "Manager", 123456, "Roger", 23, "Ireland");
emp.printName();
emp.printCountry();
emp.printEmpDetails();
