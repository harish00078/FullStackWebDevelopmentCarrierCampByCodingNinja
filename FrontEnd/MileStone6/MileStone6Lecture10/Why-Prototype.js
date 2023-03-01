// here we learn about that why we have to use the (prototype):

// because if  we create the (any) function under that constructor for the (object):then that function will also we created with the (everY) object:that we create from that constructor:

// so for avoiding that:we will use the (prototype) of that (constructor) function:
// so that we will not create the (any) function under the (object):that we are creating from that constructor:

// with the help of prototype:we can create the (functions) separately for that constructor objects:

function Vehicle(numWheels, price) {

  this.numWheels = numWheels;
  this.price = price;

  // this.getPrice = function(){
  //   return this.price;
  // }

}

// here we are using the (prototype) method for creating functions for the (objects) of the (constructor) function:
// here we are creating the function:for (objects) that we have created with the help of (constructor) function:
// here we create the (function) for the (object) of the constructor function:through the (prototype) method:

// like here we create the (getPrice) function on the constructor but which the help of (prototype) of that (constructor):for the objects:

Vehicle.prototype.getPrice = function(){
  return this.price;
}



var car = new Vehicle(4, 100000);
var truck = new Vehicle(14, 19900000);
var bus = new Vehicle(6, 122000);
var train = new Vehicle(140, 98989891000);


console.log(train);

// here we are using the function:that we created on the constructor:with the help of (prototype) of the (constructor)function:
console.log(train.getPrice());



// we can also add the new (properties) in the (objects):
console.log(train.color = 'black');

console.log(train);

// but if want to add the new (properties) in the all (objects) that we have created:
// we can do that with the help of (prototype)method:
// IMP = that new property that we have created or added in the (objects) through the (prototype) of the (constructor)function:
// they will only be present in the (prototype) object:not in the (constructor) object:

// IMP = other important things is that the one constructor (prototype) objects are also connected with the other (constructor's) prototype objects:
// if it did not find that property in the one prototype object or we can say in its own constructor prototype object:then they will look in the other prototype object for that property:

Vehicle.prototype.color = 'black';

// know we check any of the (object) they all will have this color property in it:
console.log(car.color);
console.log(truck.color);
