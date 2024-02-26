"use strict";
/*
// Syntax
function nameOfFunction(a:typeo,b:type..) : returnType {
    // Statements
}
*/
// Function Declaration
function servant(rs, name) {
    console.log("Hello, What can I do for you");
    return 5;
}
// Function Calling
let res = servant(20, "middle");
console.log(res);
// Type of Function : (parameters) => return type
// Implicitly type detected by the function "x"
let myFun1 = function (a, b) {
    return a + b;
};
console.log(myFun1(5, 8));
// Explicitly annotation of function type
// let myFun2: (a: number, b: number) => number = function (
//     a: number,
//     b:number
// ): number {
// 
//     return a+b;
// 
// }
let myFun2 = function (a, b) {
    return a + b;
};
console.log(myFun2(11, 12));
// Let's make an object including functon type
let person;
person = {
    firstName: "Rishi",
    lastName: "Raj",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
// console.log(person);
console.log(person.getFullName());
