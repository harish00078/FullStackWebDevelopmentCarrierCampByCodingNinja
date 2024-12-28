console.log("Learn about currying in js");

// => 1 = here we see the simple js-function which has multiple arguments with in it:
// => here we have created the function:which has three arguments with in it:
// function sum(x,y,z){

//     console.log('sum of three number are', x+y+z);
// }
// and here we are using that function:
// sum (10,20,30);

// => 2 = here we see the js-function which has multiple arguments in it:and we have created it with the help of curring method or technique:
// Curring:Currying is defined as changing a function having multiple arguments into a sequence of functions with a single argument. When currying a function in JavaScript, closures are used to retain the values of previous arguments that have been passed to the curried function. This is because each time a new argument is passed, a new function is returned that has access to the previous arguments.
function sum(x) {
    // V.IMP = here we know that.inner-function will have the access to the outer-function's parameter or argument-values.because of the closures in js:
  return function sumY(y) {
    return function sumZ(z) {
      return x + y + z;
    };
  };
}


// and here we are using function:which we have created using the curring technique:
// => Explanation on currying's working technique: sum is a curried function that takes one argument x and returns another function that takes one argument y, which returns a third function that takes one argument z: The final function returns the sum of x, y, and z:
// 1 -> When sum(2) is called, it returns a new function that takes one argument y.This returned function is assigned to sumXResult.
// 2 -> When sumXResult(4) is called, it returns a new function that takes one argument z. This returned function is assigned to sumYResult.
// 3 -> When sumYResult(6) is called, the final function is invoked, and it returns the sum of 2, 4, and 6, which is 12.
// 4 -> Finally, the result of sumZResult is printed to the console, which outputs 12
const sumXResult = sum(10);
console.log('first function  result',sumXResult);
const sumYResult = sumXResult(20);
console.log('second function  result',sumYResult)
const sumZResult = sumYResult(40);
console.log('third function result',sumZResult);