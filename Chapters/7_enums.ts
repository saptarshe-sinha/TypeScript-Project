// Enums
/*
    *** group of named constant values
*/

// Name of Days

enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
}

// Name of Months

enum Months {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
}

// console.log(Months.Jan)

function myFun(value: Months) {
    switch (value) {
        case Months.Jan:
            console.log("This is first month")
            break
        case Months.Feb:
            console.log("This is second month")
            break
        default:
            console.log("Not Valid Month")
    }
}

myFun(Months.Jan)
myFun(Months.Dec)
// myFun(0)

enum orderStatus {
    PENDING,
    DISPATCHED,
    DELIVERED,
}

// Example

let order: { title: string, price: number, status: orderStatus, date: Date}

order={
    title: "Samsung Galaxy M31",
    price: 15999,
    status: orderStatus.DELIVERED,
    date: new Date()
}

console.log(order)
// 
// let date:string =  new Date().toLocaleDateString()
// console.log(date)