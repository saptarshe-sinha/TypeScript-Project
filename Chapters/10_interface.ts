//Interface
/*
    Interface allows us to define the structure or shape of an object 
    and specify the properties and methods that an object has or should have.
*/

interface User {
    readonly dbId: number,  //readonly
    email: string,
    userId: number,
    googleId?: string, 

    // stratTrail: () => string  // Defining a function
    startTrail(): string,  // We can also define a function like this

    // getCoupon: (couponName: string) => number
    getCoupon(couponName: string): number
}

// Reopening of the interface : if we want to add more properties later
interface User {
    githubId: string
}

const user: User = {
    dbId: 22,
    email: "abc@gmail.com",
    userId: 1234,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "rishi10") => {
        return 201
    },
    githubId: "rishi-raj"
}

user.userId= 3201
/*
    user.dbId = 33   // We can not update "dbId" as it is a "readonly" property
*/

user.getCoupon = (name: "rishi10") => {
    return 101
}

console.log(user)


// Inheritence Property of Interface
interface Admin extends User {      // "Admin" inherits all properties from User & can add its own properties

    adminId: number,
    role: "admin" | "learner" | "student"

}

const admin: Admin = {
    dbId: 22,
    email: "abc@gmail.com",
    userId: 1234,
    adminId: 3211,
    role: "admin",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "rishi10") => {
        return 201
    },
    githubId: "rishi-raj"
}


// Interface vs Type
/*
    Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
*/

// Extending an Inteface
interface Animal {
    name: string;
  }
  
interface Bear extends Animal {
    honey: boolean;
  }
  
// Extending a type via intersections
type Animall = {
  name: string;
}

type Bearr = Animal & { 
  honey: boolean;
}


// Adding new fields to an existing interface
interface Window {
  title: string;
}

interface Window {
  size: number;
}


//A type cannot be changed after being created
/*
type Window = {
  title: string;
}

type Window = {
  size: number;   // Throws Error
}
*/

export = {}