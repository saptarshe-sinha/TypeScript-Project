// Required Parameters: must
function sum1(a: number, b: number, c: number): number {
    return a+b+c;
}

console.log(sum1(5, 6, 7))  // a,b,c are required parameters

// Optional Parameters: optional
function sum2(a: number, b: number, c?: number): number {
    if (c === undefined) {
        return a+b;
    }
    return a+b+c;
}

// *** Optional paramter can not be defined before any required paramter & it must be last parameter

console.log(sum2(1, 2, 3)) // a, b are required and c is optional

console.log(sum2(7, 8))  // 'c' is optional paramter and optional is denoted by '?'


// Default Parameters
function sum3(a: number, b: number, c: number = 100): number {
    return a+b+c;
}

console.log(sum3(1, 2, 3)) // a b are required and c is default

console.log(sum3(1, 2)) // 'c' is default parameter and has a default value 100


// If default paramter is before a required parameter
function sum4(a: number, b: number=500, c: number): number {
    return a+b+c;
}

console.log(sum4(1, undefined, 3))  // We have to pass 'undefined' if we want to use default value



// Rest Parameters
/*
    *** initialized by "...var_name"
    *** It accepts multiple values as array
    *** It must be the last parameter
*/
function sumAtleastTwo(a: number, b: number, ...rest: number[]): number {
    console.log("\nValue at rest parameter: ",rest)
    let sum = a+b;
    rest.forEach((n) => {
        sum += n
    })
    return sum
}

console.log("\n***Rest Parameters***")

console.log(sumAtleastTwo(4,7))  // passed 2 values & 'rest' will not receive any value
console.log(sumAtleastTwo(1,2,3,4,5,10)) // passed more than 2 values & 3,4,5,10 are passed to 'rest'
