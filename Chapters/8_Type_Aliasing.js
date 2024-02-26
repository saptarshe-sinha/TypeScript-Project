"use strict";
// Type Aliasing
/*
    *** Creating temp name of type
*/
var _a;
let address = "Kolkata";
let password = "abcd";
password = 12345678;
let order = {
    title: "Mobile",
    price: 10000,
    status: "Shipped"
};
console.log(typeof order);
console.log(order);
let order1 = {
    title: "Smart Phone",
    price: 15000,
    status: "Ordered"
};
console.log(typeof order1);
console.log(order1);
let myUser = {
    _id: "1234",
    name: "Rishi",
    email: "r@gamil.com",
    isActive: false
    // Not necessary to define crediCard as it is optional
};
console.log(myUser._id);
myUser.name = "Raj";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// customer may be null or undefined so we have to handle as follow
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday);
}
// There is an easier way to implement this using "optional" operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
/*
    The "?" mark followed by "." i.e chaining operator is called
    "Optional property access operator"
*/
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element access operator
// if (customer !== null && customer !== undefined) {
//     console.log(customer?.[0])
// }
// Optional Call
let log = null;
log === null || log === void 0 ? void 0 : log("Hello");
module.exports = {};
