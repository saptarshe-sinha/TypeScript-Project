// Creating a class
class User {
    public email: string  // public property can be accessed from anywhere
    name: string
    private readonly city: string = "Asansol"   // city can not be accessed outside of this class as it is "private"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }

}

/*
    *** properties are set to "public" as default access modifier
    *** "private" is not a keyword in "javaScript", we use "#" as prefix to define private modifier
*/

// Making an object
const raj = new User("r@gmail.com", "raj")
/*
    raj.city = "Kolkata" // Throws Error because readonly property can not be updated
*/

/*
    // But We can access it
    console.log(raj.city)
*/

// If we don't we to let the user access it as well then we use "private" modifier while defining it
    // console.log(raj.city)  
// Now, it can not be accessable and it throws error


// Now, we can define the above class amother way in typeScript
class User1 {
    // private _count = 1
    protected _count = 1  // "protected" properties can be accessed by its sub-class

    readonly city: string = "Kolkata"
    constructor(
        public email: string,
        public name: string,
        private userId: string
        ) {

    }

    // Private fucntion
    private deleteTocken() {
        console.log("Tocken Deleted")
    }
}

// Inheritance: Properties of a class can be inherited by another class but not the "private" ones

// Now, Making a Sub-class of "User1"
class SubUser1 extends User1 { 
    isFamily: boolean = true
    changCount(){
        this._count = 4
    }
}


// Getter & Setter : Used to get & set the cvalues of private properties defined in a class
class User2 {

    private _courseCount = 1

    readonly city: string = "Kolkata"
    constructor(
        public email: string,
        public name: string,
        private userId: string
        ) {

    }

    // Private fucntion
    private deleteToken() {
        console.log("Tocken Deleted")
    }

    // Getter
    get getAppleEmail():  string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // Setter
    set courseCount(courseNum) {  // set accessor can not have return type
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const rishi = new User2("r@gmail.com", "Rishi", "101")
// rishi.deleteToken()  // Error

export = {}
