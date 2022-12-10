// here we learn about functions:
// for creating functions in the javascript we have use the (function) method it self and after that we have define the (function-name) and then  under currly braces we write our function code that we want to create:
// like here we are creating the function named as showAlert().
// showAlert function is used when we want alert the user about something:
// we can also gave the parameter values to the function:parameter values are those values which are given by us to the function:
function showAlert(msg){
  // here we write our alert message:
  return (msg);
}

// here we are calling our function or we can say using our function:
// for using our own created function we have to call that function with its name:
// Or if we are using the parameter values in the function: for using that value we have to define that parameter value in the function were we are using it: 
console.log(showAlert("hello!!!"));

// here we are creating (sum) function:which have two parameters in it (a,b): we can use as much as parameters we want:
function sum(a,b){
  //we can also print the user given values under the function it self also:
  // console.log(a+b);

  // Or if we want that under function we only gave the output value to the user:for that we can use the return method:
  return a+b;
}

// if we are printing the value of the function under the function:then user did not have to use the print system:it simply have to provide the function parameter values with function name:
// sum(4,6);

// if we are only providing the output value to the user from the function using return method: so user have to use the print method by itself for printing that value:
console.log(sum(6,4));
