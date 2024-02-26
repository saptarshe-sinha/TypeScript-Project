"use strict";
// "Union" types : to assign two or more types
let userId = "dshewhf"; // (string | number) is "union" type
userId = 654955;
// Here,  "userId" can be of either string or number
// Function to display userId and return
function displayUser(userId) {
    console.log("user id is : ", userId);
    if (typeof userId === "string") {
        userId.toUpperCase;
    }
    return userId;
}
// Calling Function
displayUser(userId);
// For Array
const data1 = [1, 2, 3];
const data2 = ["a", "b", "c"];
const data3 = ["x", "y", "z"]; // the array can be a string or number
const data4 = [1, 2, "a", "b", true]; // this array can be of mixed type
// Object "rishi" is of User or Admin type
let rishi = { name: "Rishi", id: 235 };
rishi = { userName: "rc", id: 235 };
// Now make an object
let textBox = {
    drag: () => { },
    resize: () => { }
};
// void type    void: null or undefined
// If strictNullChecks is set to false in tsconfig.json then we can assign null to void
function myFun(x, y) {
    console.log("Sum is : ", x + y);
}
myFun(5, 6);
// Literal Types of assignment
let pi = 3.14; // only 3.14 can be assigned
/*
     pi = 3.143    // Throws Error
*/
let userNamee;
userNamee = 10;
userNamee = "Raj";
userNamee = "Rishi";
// userName = 11
// userName = "Prince"
console.log(userNamee);
console.log(typeof userNamee);
// never type : It represents the value that will never occur, used when function never return value
function myFun2() {
    throw new Error("This is my error");
}
// unknown type: when value is not known and it is type safe counterpart of "any" type
function myFun3() {
    return "This is my value";
}
// type safety
let val = myFun3(); // type safety enabled for unknown
let val1 = myFun3(); // type safety disabled for unknown
console.log(val1.toUpperCase()); // no error
// console.log(val.toUpperCase())   // throws error
// type assertion
let valString = val;
console.log(valString.toUpperCase()); // no error
module.exports = {};
