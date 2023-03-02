// here we learn about the more  properties  of the (prototype):

// under the every (objects):that we create with the help of (constructor) function:which will have property named as (__proto__):

function Vehicle(numWheels, price) {
  this.numWheels = numWheels;
  this.price = price;
}

var car = new Vehicle(4, 100000);
var truck = new Vehicle(14, 19900000);
var bus = new Vehicle(6, 122000);
var train = new Vehicle(140, 98989891000);

// here we are printing the object with its (Proto)property:
console.log(car.__proto__);

// this (__proto__) is also know as (dunderProto):
// and also this (__proto__) property of the (object): is same as the (prototype) of the (contructor) function:
// IMP = but we are not allowed to (use) this (__proto__) property:because this will break lot of code:
console.log(car.__proto__ === Vehicle.prototype);

// so if we want the (Prototype) of the (Object):we can get that with the help of (getPrototypeOf) method:instead of using the (__proto__):
console.log(Object.getPrototypeOf(car));

// and this prototype is also same as the (constructor)function (prototype):

console.log(Object.getPrototypeOf(car) === Vehicle.prototype);


// we also have another properties:to check that the (constructor) prototype is the same prototype of the (object):
// we do that with the help of (isPrototypeOf) method:
console.log(Vehicle.prototype.isPrototypeOf(car));

// we can also check the (properties) of the (object) :means that which (property) belongs to the which (object):or we can say that this property is present in this object or not: 
console.log(car.hasOwnProperty('price'));

// we can also add the new Property in the (object):with the help of adding (new) property in the (constructor) prototype:
Vehicle.prototype.color = 'black';

// know after that every (object) that we have created or create through this constructor will have this (color) property:

console.log(car.color);

// if we create new (object):that will also have that color property  in it:
var Vehicle1 = new Vehicle(8,1111110);
console.log(Vehicle1.color);


// instead of adding (one) color in the every object:we can also add the (separate) color property to every object:
Vehicle1.color = 'white';

console.log(Vehicle1.color);