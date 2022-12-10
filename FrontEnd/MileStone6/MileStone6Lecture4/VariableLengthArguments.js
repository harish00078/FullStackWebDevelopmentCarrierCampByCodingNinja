// here we learn about variables lenght arguments:we learn about variables different work cases with in the functions:

// 1 = means if we are creating a function with two parameters.and will only provide the value to the one parameter.then in javascript we did not get the error.it will provide us a output as  (NaN) function:
function sum(a,b){

  // because if we print the user value before it use the function:then we can see the that other parameter value is (undefined).and we know that when we have one value within and other value is undefined.then output will we (NaN):
  console.log(a,b);
  return a+b;
}

// here we are only providing a one parameter value to the function:
// console.log(sum(4));

// here we are providing a one extra parameter value to the funtion:but it did not change anything in output.because javascript did not  get acquire the extra parameter value:
console.log(sum(4,5,6));
