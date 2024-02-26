// "Union" types : to assign two or more types

let userId: (string | number) = "dshewhf"  // (string | number) is "union" type
userId = 654955

// Here,  "userId" can be of either string or number


// Function to display userId and return
function displayUser(userId: string | number): string | number {

    console.log("user id is : ", userId)

    if (typeof userId === "string"){
        userId.toUpperCase
    }
    
    return userId
}

// Calling Function
displayUser(userId)


// For Array
const data1: number[] = [1, 2, 3]
const data2: string[] = ["a", "b", "c"]

const data3: number[] | string[] = ["x", "y", "z"]  // the array can be a string or number
const data4: (string | number | boolean)[] = [1, 2, "a", "b", true] // this array can be of mixed type


// Define a object that can be of two or more types
type User = {
    name: string,
    id: number,
}

type Admin = {
    userName: string,
    id: number
}

// Object "rishi" is of User or Admin type
let rishi: (User | Admin) = {name: "Rishi", id: 235}
rishi = {userName: "rc", id: 235}


// "Intersection" types : Combining two or more types

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

// Now we can combine them into a new type using "intersection"
type UiWidget = Draggable & Resizable


// Now make an object
let textBox: UiWidget = {
    drag: () => {},
    resize: () => {}
}



// void type    void: null or undefined
// If strictNullChecks is set to false in tsconfig.json then we can assign null to void

function myFun(x: number, y: number): void {
    console.log("Sum is : ", x+y)
}

myFun(5,6)




// Literal Types of assignment

let pi: 3.14 = 3.14   // only 3.14 can be assigned
/*
     pi = 3.143    // Throws Error
*/

let userNamee: "Rishi" | "Raj" | "Bristi" | 10

userNamee = 10
userNamee = "Raj";
userNamee = "Rishi";


// userName = 11
// userName = "Prince"

console.log(userNamee)
console.log(typeof userNamee)




// never type : It represents the value that will never occur, used when function never return value
function myFun2(): never {
    throw new Error("This is my error")
}


// unknown type: when value is not known and it is type safe counterpart of "any" type
function myFun3() {
    return "This is my value"
}

// type safety
let val: unknown = myFun3()  // type safety enabled for unknown
let val1: any = myFun3()  // type safety disabled for unknown

console.log(val1.toUpperCase())   // no error
// console.log(val.toUpperCase())   // throws error

// type assertion
let valString: string = val as string;
console.log(valString.toUpperCase())    // no error


export = {}

