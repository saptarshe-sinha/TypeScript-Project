"use strict";
// Explicit Annotation
let userName = "Sapto";
//Implicit Annotation
let password = "12345678";
// Best practice to use Explicit Annotation when declaring only the variable but not assigning any data
let address;
address = "Kolkata";
let userAge;
userAge = 23;
// Implicitly 'any' type
let value;
value = "abc";
console.log(typeof (value));
value = 12345;
console.log(typeof (value));
// "Boolean" Type
let isActive = true;
isActive = false;
//" Number" type for int, float, double
let salary = 4.5;
salary = 100;
// String Literal
let userEmail = "abc@gmail.com";
let userDetails = `User is a Programmer, email is is ${userEmail}`;
console.log(userDetails);
// "nul"l type
let user = null;
console.log(user);
console.log(typeof (user)); //Object Type
// null variable is a "Falsy Value"
if (user) {
    console.log("User Exists");
}
else {
    console.log("Not Exists");
}
// "undefined" type
let pass;
console.log(pass);
// console.log(typeof(pass))
// undefined variable is a "Falsy Value"
if (pass) {
    console.log("Password");
}
else {
    console.log("No Password");
}
// any type : skip the type checing
let network = {
    product: "Smart Phone",
    price: 20000
};
console.log(network.price);
console.log(network.isActive);
let profit = 200;
profit = "500";
module.exports = {};
