"use strict";
// Abstract class
/*
    Abstract class is a class that can not be instantiated that means we can not create an object of abstract class but it be subclassed that means a sub-class inherit all properties of abstract class and we can create an object of that sub-class.

    Abstract method can only be used in "Abstract Class" and does not have a body or implementation. And, it must be implemented in the sub-class of that abstract class.
*/
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
/*
    const obj = new TakePhoto("test", "Test")  // can not create an object as it is a abstract class
*/
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const saps = new Instagram("test", "Test", 3);
