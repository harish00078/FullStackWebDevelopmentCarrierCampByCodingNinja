//  here we learn about Pass By value VS Pass by Reference:
// 1 = primitive data type values are pass by values in the javascript: like creating a simple varaible with some value:
// 2 = Arrays are pass by reference in javascript:
// 3 = same as Array.Objects are also pass  by reference in javascript:

// like if we create some function here:
function f(a,b,c){
  // primitive type:- here we create variable with some value:
  a = 3;
  // here we have array:
  b.push("bob");
  // here we have object:
  c.first = false;
}

// here we create another three values:In the global area:and print that values through the  function to see that which value is work as pass by value or pass by reference:

var x = 4;
var y = ["raj","rahul"];
var z = {first:true};

// here we use function:and given the global area value to that function:
f(x,y,z);
console.log(x,y,z);