// here we are learning about the (promises):
// and learn about that how they with work in the (front-end):
// and why we use them in front-end:

// 1 =  creating or using promise.we need two things:
// first is the (new) method:
// second is the (Promise) constructor- function itself:

// 2 = how we use or get the data or value from the promise:
// IMP = so for that promise-use or accept the (callback-function) as an (Argument) in it:
// we can create the callback-fucntion or function in both the ways:
// Like: simple-function or arrow-function:
// IMP = In promises we prefer the (arrow-functions):

// 3 = In the callback-fucntion:
// we basically get the two arguments:
// first is (resolve):
// second is (reject):
// Imp = we can also named them anything:because they just are the arguments:
// we just only need to focus on there (working):

var promise = new Promise((resolve, reject) => {
  // if in the promise.we call the (resolve) argument or function:
  // then in console-log.we can say see that.we well get the output as (fullfilled):
  // IMP = what ever (Data) resolve function have in it:
  // will be get into the (promise-result) key of the promise:
  //   resolve("yay promise get fullfilled");
  // here we are checking the (reject) argument or function.of the promise:
  // that what it will have in it.if we get the (reject) as a output.from our promise function:
  // In its output.we will get that (promise-state) is rejected.and its result will be (undefined):
  //   reject("something went wrong");

  // V.IMP = here we are using the (setTimeout) method:
  // with the help of setTimeout method:we can execute the things after some-time in the javascript:
  // we are basically considering the (setTimeout) method as a (api) call:
  setTimeout(()=>{
    // when we get the data from the (api):
    // we have to resolved that data:
    // IMP = we can also pass the parameters to the (resolve) and (reject) method:
    // if we get the (data) from the (api):we can pass that (api) data  to any of the  (promise) methods or arguments: acc to the type of data:so that we can handle that (data) with the help of promise-functions:and use it in our application:
    // resolve({message:'success'});

    reject({message:'api is not responding'});

  },3000);



});


// V.IMP = know for handling the response from the promise:
// we have two functions:
// => 1 = first is (then) method:we call the then() method:when the promise is get (satteled):means that when we get the (value) related to any one of promise's (argument):In simple words When a promise is (resolved) or (rejected), then that's the time when we called the then() method:
// V.V.IMP = And Two functions are passed to that then() method. If the promise is resolved and a result is received, the first function iscalled. If the promise is rejected and an error is returned, the second function is called.
// (It's optional as the catch() method is comparatively a better way to handle errors.)
// IMP = if did not wanna use the catch function:we can use this method to handle the promise:
promise.then((data) => {
    // On Resolved
    }, (error) => {
    // On Rejected
    })

// => 2 = second is (catch) method:catch() is called to handle the errors, i.e., when a promise is rejected or when some error has occurred during the execution. catch() method takes one function as an argument, which is used to handle errors.

// V.V.IMP = here we are passing the parameter or its data as a argument to the promise handler-functions:
// so we can access that data in the promise-handler functions.and from there we can use that (data) in our application:
promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error',error);
})


