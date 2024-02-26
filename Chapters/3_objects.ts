// Objects
/*
    Objects are data types that store key-value pairs.
*/

// We can define the type in the same line
let student: {
  address: string,
  name: string,
  phone: number,
  isActive: boolean,  
} = {
    name: "Rishi",
    address: "Kolkata",
    phone: 754807,
    isActive: true,
}

console.log(student)
console.log(student.name)
console.log(typeof(student))


// We can use "interface" to define the type of the object
interface Student {
    address: string,
    name: string,
    phone: number,
    isActive: boolean,  
}

let student2: Student = {
      name: "Rishi",
      address: "Kolkata",
      phone: 754807,
      isActive: true,
  }

// We can use "type" declaration to define the type of the object
type Students = {
    address: string,
    name: string,
    phone: number,
    isActive: boolean,  
}

let student3: Students = {
      name: "Rishi",
      address: "Kolkata",
      phone: 754807,
      isActive: true,
  }


