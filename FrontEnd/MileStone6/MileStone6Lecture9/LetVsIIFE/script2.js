// here we have another method:through that we are also have to create the (variable):with in the (block-level) scope:and method is we can use the (let) keyword:
// (let) keyword basically allow to us to access the (variable) only with in the (block-level)scope or we can say only with in the (scope) were we have created that (variable):if we try to access the (variable) outsite the (block): then it will gave us the (error):


{
  let fileName = 'file2';
  console.log(fileName);
}




// here we create function:with the help of (IIFE = Immediately Invoked Function Expression ) method:

// (function(){

//   var fileName = 'file2';

//   console.log(fileName);
// })();





// here we create simple funciton:

// function print2() {

//   var name = 'file2';

//   console.log(name);
// }

// print2();