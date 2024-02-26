"use strict";
// Creating a class
class User {
    constructor(email, name) {
        this.city = "Asansol"; // city can not be accessed outside of this class as it is "private"
        this.email = email;
        this.name = name;
    }
}
/*
    *** properties are set to "public" as default access modifier
    *** "private" is not a keyword in "javaScript", we use "#" as prefix to define private modifier
*/
// Making an object
const raj = new User("r@gmail.com", "raj");
/*
    raj.city = "Kolkata" // Throws Error because readonly property can not be updated
*/
/*
    // But We can access it
    console.log(raj.city)
*/
// If we don't we to let the user access it as well then we use "private" modifier while defining it
// console.log(raj.city)  
// Now, it can not be accessable and it throws error
// Now, we can define the above class amother way in typeScript
class User1 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private _count = 1
        this._count = 1; // "protected" properties can be accessed by its sub-class
        this.city = "Kolkata";
    }
    // Private fucntion
    deleteTocken() {
        console.log("Tocken Deleted");
    }
}
// Inheritance: Properties of a class can be inherited by another class but not the "private" ones
// Now, Making a Sub-class of "User1"
class SubUser1 extends User1 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changCount() {
        this._count = 4;
    }
}
// Getter & Setter : Used to get & set the cvalues of private properties defined in a class
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Kolkata";
    }
    // Private fucntion
    deleteToken() {
        console.log("Tocken Deleted");
    }
    // Getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // Setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const rishi = new User2("r@gmail.com", "Rishi", "101");
module.exports = {};
