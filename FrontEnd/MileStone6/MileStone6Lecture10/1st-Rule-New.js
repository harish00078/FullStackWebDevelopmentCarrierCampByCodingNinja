// first rule of calling a function:is with the (new) keyword:

// what does the (new) keyword do:
// => its do the four things:
// 1 = first it create a new object{}:
// 2 = its connect or links that (new-object) with the  (vehicle) prototype:
// 3 = after that it call the (vehicle) function:with the value of (this) willl be set to the (new-object):
// => that's why we will get the (output):like this (Vehicle {}):

// 4 = so if the (Vehicle) function:is not return any thing:then we have to return the (new-object) = ({}):that why In output:we have (Vehicle) function with the (empty) new-object ({}):

// here we have function:with out any value:
// function Vehicle(){

//   console.log(this);

// }

// here we are calling a function with the help of the (new) keyword:without giving him any valuee:
// new Vehicle();

// here we have function:with the value:
// same working  process as the (empty) vehicle function:with the (new) Keyword:
function Vehicle(name) {
  
  this.name = name;

  console.log(this);
}

// here we are calling a function with the help of the (new) keyword:also giving him a valuee:
new Vehicle("harish");
