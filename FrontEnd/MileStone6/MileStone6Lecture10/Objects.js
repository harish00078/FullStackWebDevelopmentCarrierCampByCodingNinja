// here we learn about the (objects) in (javascript):

// first is that how we can create the empty objects in the javascript:

// 1 = by simply using the curlly brackets:
var obj = {};
// 2 = with the help of (new) keyword and (object) function:we can create the (object) or empty object:

//  this (object) function in javascript is basically the (constructor) function:that is already written in the javascript:we are only using it for creating new objects:
// if this (object) function is basically the (constructor) function:then this also  means that it also had its (prototype) object:
var obj1 = new Object();

// here we are printing the (object):to see that it has the prototype of the (object)constructor function:
// through which this object has been created:
console.log(obj1);

// here we are printing the prototype of the (object)constructor function:
console.log(Object.prototype);

// we also get the prototype of the (object) with the help of method (getPrototypeOf): which is present in the constructor (object) function:
console.log(Object.getPrototypeOf('obj1'));

// we can also check that the (object) constructor prototype is same as the prototype of the (object) that we have created with the help of the (object) constructor function:
// for doing that we have to use the (property):named as (isPrototypeOf):

console.log(Object.prototype.isPrototypeOf(obj1));


// important thing is that:
// any object that we create in the (javascript):are connected with the inbuild (object) constructor prototype:
// for example if we create a constructor function or object:then that (constructor) function: will be created or connected with the  inbuild (object) constructor prototype:

// here we create Vehicle constructor function:and this constructor function:will be created with the help of the inbuild (Object) constructor prototype:

function Vehicle(numWheels,Price){

  this.numWheels = numWheels;
  this.Price = Price;
}


// and if we create (object) with the help of this Vehicle constructor function:
// IMP = then that object will be connected with the (prototype) of the Vehicle constructor function:
// IMP = same as the Vehicle constructor function connected with the (prototype) of the Inbuild (Object) constructor function:
// these things work:like a hierarchical system:or we can also say that this is the (chain) of the prototype:
var car =   new Vehicle(8,13242343);
