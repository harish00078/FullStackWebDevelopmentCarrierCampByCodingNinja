// here we learn about the (closures) of (let):

// if we use the (var) keyword:for creating (variables) in the (for-loop):
// then this (var) KEYWORD:will create the (variables) in the (global) scope:
// IMp = even if we (put) this (for-loop):under the function:
// IMp = (var) keyword:basically store all the (words) in the (one) storage:


// function test() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
  
//   }

//   console.log("after for loop", i);

// }


// test();



// (Let) keyword:
// if we use (let) keyword:for creating the (variables) in the (for-loop):
// Imp = then those (varaibles): will have the (block-scope):means they are only accessable under the (for-loop) itself:
// Imp = every variable that is created (through) the (let) keyword: will have its own (storage) block:
// IMp = In output:we can also see that the (Let) variables:does not jump on the (next) number:until the (first) number is not get executed:

function test() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  
  }

  // console.log("after for loop", i);

}


test();

