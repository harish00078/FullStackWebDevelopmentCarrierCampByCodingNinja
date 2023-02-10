// here we try to create (varaibles) under the (function):
// IMP = so that the (variables):does not lie under the (global) variable-scope:

// here we use (IIFE = Immediately Invoked Function Expression ) method: for excuting (functions):because the functions are also lie under the glocal scope if two functions also have a same-name:then they will also get overridden by the with each other:like the (simple) variables does:
// so resolving that  we can use the (IIFE) method:with the help of this method:we can create the (function) without the (name) and also executing it:without (differently) creating a printing  statement for it:

// here we create function with the helo of (IIFE) Method:for the IIFE method we simple have to (put) the function under the (simple-brackets):
(function(){

  var name = 'file1';

  setTimeout(function () {
    console.log(name);
  }, 1000);

  // and for printing this function:with the help of (IIFE) method;we simply have to use the (brackets) at the end of the (function):
})();




// // here we have simple (function) with name:
// function print() {

//   var name = 'file1';

//   setTimeout(function () {
//     console.log(name);
//   }, 1000);
// }

// // and here we print it:
// print();
