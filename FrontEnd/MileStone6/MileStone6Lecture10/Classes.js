// here we learn about the Classes: in javascript:

// Classes = Prior to ES6, there were only classes and, functions which are callable objects. A class in javascript is basically a blueprint or template of the object. New objects can be created from a class. Classes are similar to functions. Here, a class keyword is used instead of a function keyword. Unlike functions classes in JavaScript are not hoisted. The constructor method is used to initialize. The class name is user-defined.

// here we have simple constructor:that we have created with the help of (function) keyword:

function Vehicle(numWheels, price) {
  this.numWheels = numWheels;
  this.price = price;
}

// and here we are  creating functions for the (objects): we will create the function for the (objects) with the help of the (prototype) of the constructor functions:

Vehicle.prototype.getPrice = function () {
  return this.price;
};

// and here we are creating the objects:with the help of the (constructor) function:
var Vehicle1 = new Vehicle(8, 98897878);

console.log(Vehicle1);



//  if we try to create the vehicle(object):before we declare the class for that (object):
var truck = new vehicle(12,34624654);
console.log(truck);


// here we are creating the function: or we can say (constructor) funtion:with the help of (class) keyword:

// first we define the class:

class vehicle {

  // second:we define the constructor function:
  // here we did not have to gave the name to the (constructor) function:
  // because this constructor function will be called with the help of the (class) name:

  constructor(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
  }

  // we can also create multiple functions under the one (class):
  // so here we create a function for getting price of the vehicles:

  // here we simply create function:
  getPrice(){
    // and this will return us the price of the vehicle:
    return this.price;
  }


}
   


// here we are creating the (objects):with the help of (class):

var car = new vehicle(8,35234512354523);


console.log(car);

console.log(vehicle.prototype);


