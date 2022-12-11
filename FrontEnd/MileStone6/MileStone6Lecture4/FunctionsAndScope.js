// here we learn about (Scope):
// Scope: the Scope of  a variable is part of code where that variable is accessible: Scope of variable depends on where they are defined:

// If we create variable without any function or any method .means that  if we create variable openlly.then that varaible is know as (global-scope) variable:means that we can use that variable in anywhere of the code:
// here we create (global-scope) variable:
var Name = "global";

// 1 = we can use this variable in any print statement:
console.log(Name);

// but if we create a variable under the function.then its Scope will only  under that function: it will not be accessible output of the function:
// this is also known as function-scope or (lexical-scope):
function scopeDemo(){
  var name = "function";
  console.log(name);
}

// here we are using the function:
scopeDemo();

// but if we try to access the function variable out off the fucntion: then it will not working: it will gave us a error:
// console.log(i);


// here we are learning about that how the (stack-execution) system works for executing the code in the javascript:
//IMP = using this way we can also access the other variable's value or we can say other function's values:
function c(){
  console.log("Inside c");
}
function b(){
  // here we call (c) function under the (b) function:
  c();
  console.log("Inside b");
}

function a(){
  // here we call (B) function under the (a) function:
  b();
  console.log("Inside a");
}

// here we are using the (a) function:
a();

//here we are creating the simple print statement:
console.log("global context");

