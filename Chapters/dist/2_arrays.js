"use strict";
// Arrays
/*
    It is a collection of items of same data type stored at contiguous memory
*/
let nums = [10, 15, 20, 25, 30];
let names;
names = ["Sapto", "Rishi", "Raj"];
console.log(names[1]);
// length
console.log(names.length);
// forEach
names.forEach((name, index) => console.log(name, index));
// map
nums.map((val, i) => console.log(val, i));
let upperNames = names.map((name) => {
    console.log(name);
    return name.toUpperCase();
});
console.log(upperNames);
// Push
let newLength = names.push("Bristi");
console.log(names);
console.log(newLength);
console.log(typeof (names)); // Object Type
console.log(typeof (names[0])); // String Type
// Join
console.log(names.join(""));
console.log(names.join("---"));
// Array with two or more data types
let mixed;
mixed = ["abc", "def", 10, 15];
console.log(mixed);
