// here we learn about hoisting:
// hoisting: it is a very interesting feature of the javascript:hoisting means that we can print the variable before its declaration:
// for example:
// here we printing the variable before its declaration:
// Imp:- but if we are printing the variable before its declaration. then its output value will we undefined.because only the variables get moved In hoisting not the variable value:
// if variable working with in hoisting feature: then that is known as (variable-hoisting):
console.log(a);
// here we are declaring the variable after printing it:
var a = 10;

// we can also use hoisting feature in the (function) as well:

// we can also use the hoisting feature with function:and that is known as (function-hoisting): 
hoistDemo();


function hoistDemo() {
  // here we are also printing variables before its declaration:
  console.log(i);
  var i = 10;
}
// here we are using this function:
hoistDemo();


