// Tuple
/*
    *** number of elements are fixed
    *** type of elements are known and same
*/

let skill: [string, number] = ["programming", 10]
console.log(skill[0])
console.log(skill)

// color: rgba
let color: [number, number, number, number] = [255, 255, 0, 0.5]
console.log("Current color is : ", color)

// Optional tuple
let color2: [number, number, number, number?] = [255, 255, 0]   // "?" makes optional for the last one