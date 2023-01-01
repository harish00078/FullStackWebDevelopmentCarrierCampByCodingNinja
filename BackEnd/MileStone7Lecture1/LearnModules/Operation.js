// here we are learning about modules:

// 1 =  for example if we want to create a addition function: we can create that in this way:

// function add(a,b){
//   return a +b;
// }

// 2 = Or we can create that in this way:using Modules so we can use this file or function with In any other-files also:
module.exports.add = function(a,b){
  return a + b;
}

// IMP = we can also create a module function's without writing a (module) with (exports) function.we can simple use the (exports) function for create a (functions) through the (module): like this:
exports.multiply = function(a,b){
  return a * b;
}
