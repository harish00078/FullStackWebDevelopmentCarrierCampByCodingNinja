// here we learn about the (Inheritance Using CLasses):
// Inheritance:basically means that if we have created  a one class and we want to create another class:with the help of that first class:then that is know as (inheritance):
// basically means that if we are using the (properties) of the (one-class) to create another-class):then that is know as (inheritance):
// for Inheritance:we have to use the keyword (extends):

// here we create (vehicle) class:
class Vehicle{

  constructor(numWheels,price){
    this.numWheels = numWheels;
    this.price = price;
  }

  getPrice(){
    return this.price;
  }

  printDescription(){
    console.log("Vehicle", this.numWheels, this.price);
  }

}


// here we create another class:
// and we want that this class should Inherit: the properties for the vehicle class:
// for that we have to use the (extends) property:
// we can also add more new properties as well:instead of only using (vehicle) properties:

class Car extends Vehicle{

  //  like here we add the another property:(numDoors):

  constructor(numWheels,price,numDoors){

    // we also have to specify the (vehicle) property values:
    // if we did not do that:then we will get the(error):
    // for specifying the values for the (vehicle) properties:we have to use the (super) keyword:
    
    // IMP = there is draw back of using (super) keyword:
    // because we are defining the (vehicle) property (values) under the constructor of the (Car) class:
    // In this way these same values will be added in the all (objects) that  we are creating with the help of (car) class:

    // super(4,3542345254);

    // so but we can do is that:we can gave the (arguments) of the Vehicle class to the (super) keyword:
    // for giving the  (arguments) of the Vehicle class to the (super) keyword:
    // we also have to define those (arguments):In the constructor of the (Car) class: 

    super(numWheels,price);


    this.numDoors = numDoors;

  } 

  // we can also use the (function) of the (vehicle) class:
  // with the help of the (super) keyword:
  
  // here we create Printdescription for the (car) class:
  printDescription(){

    // here we we are calling the printDescription function of the (vehicle) class:
    // with the help of the (super) keyword:
    super.printDescription();

    console.log("car",this.numDoors);
  }

}



// so if we create a (object):with the help of (Car) class:
var lambo = new Car(4,2624626462,6);
// and if we try to print it:then we have the (reference-error):if we did not gave the (values) to the (extended) class (properties):
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor:
console.log(lambo);

// here we are calling the printDescription function of the (car) class:
// and it will also print the values of the (vehicle) class properties:
console.log(lambo.printDescription());