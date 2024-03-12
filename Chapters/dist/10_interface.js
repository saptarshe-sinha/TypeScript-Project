"use strict";
//Interface
/*
    Interface allows us to define the structure or shape of an object
    and specify the properties and methods that an object has or should have.
*/
const user = {
    dbId: 22,
    email: "abc@gmail.com",
    userId: 1234,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name) => {
        return 201;
    },
    githubId: "rishi-raj"
};
user.userId = 3201;
/*
    user.dbId = 33   // We can not update "dbId" as it is a "readonly" property
*/
user.getCoupon = (name) => {
    return 101;
};
console.log(user);
const admin = {
    dbId: 22,
    email: "abc@gmail.com",
    userId: 1234,
    adminId: 3211,
    role: "admin",
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name) => {
        return 201;
    },
    githubId: "rishi-raj"
};
module.exports = {};
