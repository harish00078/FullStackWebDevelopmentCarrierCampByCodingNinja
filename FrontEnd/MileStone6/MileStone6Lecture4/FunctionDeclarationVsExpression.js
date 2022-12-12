// we can check that which function method is better using (hoisting):any function method that works well  with the hoisting is a better function method:
console.log(fact(5));

//  here in expression function the hoisting will not work because of the variable-hoisting rules:
// we can check that simple printing the variable:it will gave us a output as (undefined):
console.log(factorail);
console.log(factorail(4));



// here we have two ways to create a functions:
// here we are checking that one of which function method is better: and when should i decide that which method should i use:

// 1: Declaration
function fact(n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
}



// 2:Expression
var factorail = function fact(n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};


