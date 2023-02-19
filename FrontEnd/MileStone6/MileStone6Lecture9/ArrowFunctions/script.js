// here we learn about the (arrow) functions:

// this is the simple way of writing function:
var multiply = function(x,y){
  return x * y;
}

console.log(multiply(4,7));


// In this way we can create (function):with the help of the arrow functions:
// In this way of writing function;we can say that the (=>) sign basically represents that the (statement) that we have written is basically a (function):

var multiply = (x,y) => { return x * y};

// IMp = if there is the single (statement) in the function:that we try to execute then we did not have to use the (return) and brackets ({}) in the function: like this:
var multiply = (x,y) => x * y;

// like we have to create the (multiple) function:through the arrow function:
var double = x => 2 * x;