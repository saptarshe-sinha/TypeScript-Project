// Type Aliasing
/*
    *** Creating temp name of type
*/

type xyz = string;
let address:xyz = "Kolkata"
// console.log(typeof address)

type alphaNum = (string | number)
let password:alphaNum = "abcd"
password = 12345678
// console.log(typeof password)

type Order = {
    title: string,
    price: number,
    status: string,
}

let order: Order = {
    title: "Mobile",
    price: 10000,
    status: "Shipped"
}

console.log(typeof order)
console.log(order)


// We can use "interface" as well to define type of "object"
interface Order1  {
    title: string,
    price: number,
    status: string,
}

let order1: Order1 = {
    title: "Smart Phone",
    price: 15000,
    status: "Ordered"
}

console.log(typeof order1)
console.log(order1)

// ReadOnly & Optional

type User = {
    readonly _id: string,  // We can not update readonly properties later
    name: string,
    email: string,
    isActive: boolean,
    creditCard?: number,  // optional

}

let myUser: User = {
    _id: "1234",
    name: "Rishi",
    email: "r@gamil.com",
    isActive: false
    // Not necessary to define crediCard as it is optional
}

console.log(myUser._id)
myUser.name = "Raj"

// myUser._id = "123"  // throws error : we can not update "readonly" properties


// Mix & Match of types
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

// Combining these types using "&" i.e intersection type
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


// Optional property access operator

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)

// customer may be null or undefined so we have to handle as follow
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday)
}
// There is an easier way to implement this using "optional" operator
console.log(customer?.birthday)
/*
    The "?" mark followed by "." i.e chaining operator is called 
    "Optional property access operator"
*/
console.log(customer?.birthday?.getFullYear())


// Optional element access operator

// if (customer !== null && customer !== undefined) {
//     console.log(customer?.[0])
// }


// Optional Call
let log: any = null

log?.("Hello")


export = {}
