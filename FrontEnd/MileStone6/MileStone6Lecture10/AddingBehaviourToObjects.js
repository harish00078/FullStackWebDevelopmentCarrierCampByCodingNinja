// here we learn about that how we can add the (behaviour) in the (objects):

// here we create the constructor:for the vehicle(objects):
function Vehicle(numWheels, price) {

  this.numWheels = numWheels;
  this.price = price;

  // here we are adding the  behaviour to our (object) properties:
  // behaviour basically means that:adding function or functionality to our objects properties:
  // for exapmple: if we want only the (price) of the (object):or we can  say how (many-wheels) it is using or has:we only want to check that :
  // so for these kind of things we can also create the functions in the (constructor):or we can say on the properties of the (object):
  // IMP =  we can create the set function:for updating the values of the any object:
  this.getPrice = function(){
    return this.price;
  }

}


// and here we create vehicle ojects:with the help (vehicle) constructor:
var car = new Vehicle(4, 100000);
var truck = new Vehicle(14, 19900000);
var bus = new Vehicle(6, 122000);
var train = new Vehicle(140, 98989891000);


// here we are printing those objects:
// console.log(car);
// console.log(truck);
// console.log(bus);
// console.log(train);


//  here we are using the behavior function that:for only getting the price of the vehicle:
console.log(car.getPrice());
console.log(truck.getPrice());
console.log(bus.getPrice());
console.log(train.getPrice());
