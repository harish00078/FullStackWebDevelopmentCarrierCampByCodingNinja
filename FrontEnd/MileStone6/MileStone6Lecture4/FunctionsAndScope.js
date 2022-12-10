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
  console.log(i);
}

// here we are using the function:
scopeDemo();

// but if we try to access the function variable out off the fucntion: then it will not working: it will gave us a error:
// console.log(i);


