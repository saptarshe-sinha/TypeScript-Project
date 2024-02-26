// Generics
/*
    It allows us to define code that can work with multiple data types
    It is defined using <> bracket
*/


// Defining an array
// const score: number[] = []
const score: Array<number> = []  // defining with generics
const names: Array<string> = []

// Defining a function
function identityOne(val: boolean | number): boolean | number {
    return val
}
// If we want to accepts parameters with any types
function identityTwo(val: any):any {
    return val
}

/*
     For the above case we accept the value as number but can return the value as a string. This is not a good approach.

     In this case, we use 'Generics', it almost like "any" that means it can accept any types but only difference is the type passed to the "Generics_type" is locked and for this reason if the funtion accepts the value as nuber also it will return the values as number.
*/

// Using "Generics"
function identityThree<Type>(val: Type):Type{
    return val
}
   
// identityThree(5)
identityThree<number>(5) // By default it detects the type of generics implicitly still we can give a                           the type explicitly


// Shorter Defination
function identityFour<T>(val: T):T{
    return val
}

identityFour("rishi")
identityFour<string>("raj")

// Also, We can pass our own types
interface Mobile {
    brand: string,
    price: number
}

// Now,  We can call the function with an object using our own type "Mobile"
identityFour<Mobile>({brand: "Samsung", price: 15000,})


// Generics in Array
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 2
    return products[myIndex]
}

// Or we can define this array as follow
function getSearchProductss<T>(products: Array<T>): T {
     // do some database operations
     const myIndex = 2
    return products[myIndex]
}

// Genrics in arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const index = 3
    return products[index]
}

// In codebases we may see the generics in arrow function is defined with ","
const getMoreSearchProductsa = <T,>(products: T[]): T => {       // <T,> not throws error
    // do some database operations
    const index = 3
    return products[index]
}

/*
    <T,> : The comma "," is there to mention that it is not a ordinary HTML tag or JSX syntax like <h1> or <p> tag, it is a "generic"
*/




export = {}