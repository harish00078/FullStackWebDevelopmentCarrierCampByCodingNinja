// here we learn about the (class) expression and (hoisting):

//  if we try to create the vehicle(object):before we declare the class for that (object):

var truck = new vehicle(12,34624654);

// and if we try to print it:then this will not we printed:because (class) function are not (hoisted) in the javascript:
// (hoisted) means the function:which we can be accessable in anywhere of the (file):were that function has been created:

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










//  if we try to create the student(object):before we declare the class for that (object):then it will not be created:even if create the class with thee  help of (Expression):it will not able to create the (object):
// because class declaration are not (hoisted):
var harish = new student(12,8667888877);
// and if we try to print it:then this will not we printed:because (class) function are not (hoisted) in the javascript:
// even if we create the (class) with the help of (Expression):
// (hoisted) means the function:which we can be accessable in anywhere of the (file):were that function has been created:

console.log(harish);



// if we create the class:with the help of (expression):or we can say with the help of (variable):
// Expression = JavaScript’s expression is a valid set of literals, variables, operators, and expressions that evaluate a single value that is an expression. This single value can be a number, a string, or a logical value depending on the expression.

var student = class{

  constructor(rollNo,Phone_no){

    this.rollNo = rollNo;
    this.Phone_no = Phone_no;
  
  }

}