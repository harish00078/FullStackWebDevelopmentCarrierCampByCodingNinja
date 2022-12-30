// here we are seeing that were we have to use the (Let) and (Var):

// we are using the (var) function  for declaring the variable in the for-loop .and we are using the (setTimeOut) property in that for-loop.
for (var i = 0; i <= 5; i++) {
  // but we did not get the correct output here while using a (var) function:
  // => because:
  // 1 = first thing is that for-loop run faster the (1sec) time that we are using in our (setTimeProperty)function:

  // 2 = that's why each traversal of for-loop will get all the  values before the (setTimeOut) function will triggered at only one-time:

  // 3 = and other thing is that the for-loop will stop on the (6)th value: and here we are using the (var) function to declare the varaible: and we know that the every variable in the (var) function.will have a global scope:

  // 4 = that why its also get the (6)th number value and print it:these are the reasons why we have printed five-times (6) number-value:
  setTimeout(function () {
    console.log(i);
  }, 1000);
}



// we are using the (Let) function for declaring the variable in the for-loop .and we are using the (setTimeOut) property in that for-loop.
for (let i = 0; i <= 5; i++) {
  // Let function will gave us the correct output.because it using a block-scope for creating variable:
  // that's why  here In this function it will did not jump on the next number or value of the for-loop.until the first value or number will did  not get printed:
  setTimeout(function () {
    console.log(i);
  }, 1000);
}