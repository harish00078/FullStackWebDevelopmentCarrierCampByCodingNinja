// here we learn about the (prototypes):
// prototypes: prototypes are a  simply way to share (behavior) and (data) between multiple objects:
// IMP = the prototypes are property of the object constructor:

// when ever we create any (function) in the javascript:then there is in javascript the two (object) has been  created of that (function):
// one is the (function) object it self:
// second is the (prototype) object of the (function):

// IMP = prototype will be usefull:if we are using the (function) as constructor:


function Vehicle(numWheels, price) {

  this.numWheels = numWheels;
  this.price = price;

  this.getPrice = function(){
    return this.price;
  }

}

var car = new Vehicle(4, 100000);
var truck = new Vehicle(14, 19900000);
var bus = new Vehicle(6, 122000);
var train = new Vehicle(140, 98989891000);

// here we are printing the (function) it self:
console.log(Vehicle);
// here we are printing the prototype of the (function):that we have created:
// or we can say in this way can Intreact with the (prototype) of the (function):by simply using the (prototype) property with the (function):

console.log(Vehicle.prototype);


// if we want to get back from (function) prototype to the (actual) function:or we say to the (constructor) function:
// for that we can use the (prototype) property with the constructor property:
console.log(Vehicle.prototype.constructor);