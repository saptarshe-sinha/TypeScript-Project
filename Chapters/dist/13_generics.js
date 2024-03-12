"use strict";
// Generics
/*
    It allows us to define code that can work with multiple data types
    It is defined using <> bracket
*/
// Defining an array
// const score: number[] = []
const score = []; // defining with generics
const names = [];
// Defining a function
function identityOne(val) {
    return val;
}
// If we want to accepts parameters with any types
function identityTwo(val) {
    return val;
}
/*
     For the above case we accept the value as number but can return the value as a string. This is not a good approach.

     In this case, we use 'Generics', it almost like "any" that means it can accept any types but only difference is the type passed to the "Generics_type" is locked and for this reason if the funtion accepts the value as nuber also it will return the values as number.
*/
// Using "Generics"
function identityThree(val) {
    return val;
}
// identityThree(5)
identityThree(5); // By default it detects the type of generics implicitly still we can give a                           the type explicitly
// Shorter Defination
function identityFour(val) {
    return val;
}
identityFour("rishi");
identityFour("raj");
// Now,  We can call the function with an object using our own type "Mobile"
identityFour({ brand: "Samsung", price: 15000, });
// Generics in Array
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 2;
    return products[myIndex];
}
// Or we can define this array as follow
function getSearchProductss(products) {
    // do some database operations
    const myIndex = 2;
    return products[myIndex];
}
// Genrics in arrow function
const getMoreSearchProducts = (products) => {
    // do some database operations
    const index = 3;
    return products[index];
};
// In codebases we may see the generics in arrow function is defined with ","
const getMoreSearchProductsa = (products) => {
    // do some database operations
    const index = 3;
    return products[index];
};
module.exports = {};
