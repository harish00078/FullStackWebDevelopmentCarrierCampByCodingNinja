// there are many ways to create or declare a variable in the javascript: one of them is:

// 1 =  here we learn about (Let):
// if we create any variable  in the javascript using(var) function.then that variable will we automatically created with in the global scope. even if we create that variable in any off the function:
// for that example:
var a = 10;
if(a <= 10){

  // => here we are creating a variables using (var) function under the if-statement:acc to normal language these variables should not accessable outside the (if-statement):but here in javascript its working fine:

  // var b = 40;

  // => that why they created a another function of variable declaration (Let): using this function  we can block the scope of the variables:like its only accessable with in the if-statement:
  let b = 40;


}else{
  var c = 50;
}


console.log(a,b,c);