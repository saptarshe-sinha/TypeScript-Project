"use strict";
// Enums
/*
    *** group of named constant values
*/
// Name of Days
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
// Name of Months
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["Mar"] = 2] = "Mar";
    Months[Months["Apr"] = 3] = "Apr";
    Months[Months["May"] = 4] = "May";
    Months[Months["Jun"] = 5] = "Jun";
    Months[Months["Jul"] = 6] = "Jul";
    Months[Months["Aug"] = 7] = "Aug";
    Months[Months["Sep"] = 8] = "Sep";
    Months[Months["Oct"] = 9] = "Oct";
    Months[Months["Nov"] = 10] = "Nov";
    Months[Months["Dec"] = 11] = "Dec";
})(Months || (Months = {}));
// console.log(Months.Jan)
function myFun(value) {
    switch (value) {
        case Months.Jan:
            console.log("This is first month");
            break;
        case Months.Feb:
            console.log("This is second month");
            break;
        default:
            console.log("Not Valid Month");
    }
}
myFun(Months.Jan);
myFun(Months.Dec);
// myFun(0)
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 0] = "PENDING";
    orderStatus[orderStatus["DISPATCHED"] = 1] = "DISPATCHED";
    orderStatus[orderStatus["DELIVERED"] = 2] = "DELIVERED";
})(orderStatus || (orderStatus = {}));
// Example
let order;
order = {
    title: "Samsung Galaxy M31",
    price: 15999,
    status: orderStatus.DELIVERED,
    date: new Date()
};
console.log(order);
// 
// let date:string =  new Date().toLocaleDateString()
// console.log(date)
