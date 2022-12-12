// 1 => first we learn about function-declaration for creating  functions:this is the way of creating function using function-declaration method:
// function fact(n){
//   var ans = 1;
//   for(var i =1; i<n; i++){
//     ans = ans * i;

//   }
//   return ans;
// }

// 2 =>  here we learn about function-Expressions:or we can say that the other way of creating functions :
// function-expression is used to assign the function to a variable:
// like we create a  variable (a) with value (10):so instead of giving him  a value (10) to the variable. we can gave him a function or we can say provide him a function:
// like here we create a variable (factorail) and we  provide him a function its value:

var factorail = function fact(n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};

// here we create another expression-function. where we did not provide a name to the (function):
// this is also known as anonymous-function:
var factorail2 = function (n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};

// if we provide any function  or we can say create any function under the variable:then we are not able to direclty use that function:
// console.log(fact(4));

// we can use this variable.the way we are using functions:
console.log(factorail(5));

// here we are using the another variable as a function-expression: but here in this variable.its function does not have name: so here we are checking that if we provide a function to the variable which does not have a  name.does it is working or not:
// it is working because if we does not provide a name to function in the function-expression.then function will use the name of the variable:
console.log(factorail2(4));
