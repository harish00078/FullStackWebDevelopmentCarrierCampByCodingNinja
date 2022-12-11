// here In javascript we can create function under the function: or we can call them a (nested-functions):
// In This way In javascript  we can create the function under the function:

// here we are creating the global variable:
var name = "global";

// here we create outer function:
function outer(){

  //here we create another variable In the outer function:
  var name = "Outer";
  // here we create variable under the outer function:
  var outervar = 10;
  //under this outer function we create another function named as (inner) function:
  function inner(){
    // here we create another variable In the Inner function:
    var name = "Inner";

    // if we create any variable under the (inner) function:
    var innervar = 100;

    // and In under Inner function we are printing it:
    // console.log(outervar);

    // here we are printing the name variable:
    console.log(name);

  }
  inner();
  // if we try to print the (inner) function variable in the outer function:Then that will gave us a error:because we are only able to print the inner variable under the inner function:
  // console.log(innervar);
  

  //here we are printing the name varaible:
  console.log(name);
}

// we cannot directly access the (inner) fucntion:
// inner();

// but the outer function will work: even if we are printing the outer varaible in the Inner function: because outer function  have the refrence to the Inner function:
outer();

// here we are printing the name variable:
console.log(name);

