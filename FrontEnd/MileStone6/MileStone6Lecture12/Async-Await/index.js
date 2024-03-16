// here we learn about Async-Await function:
// IMP = here we will see that how the (Async-Await) function help us to write the (promises) in a cleaner-style:

// => 1 =  first we will the simple way of writing (promises):
var promise = new Promise(function (resolve, reject) {
  resolve("it's resolved");
});
promise.then((data) => {
  console.log(data);
});

// IMP = there is one more simpler-way through which we can create same upper-type promise:
// same way we can do the (reject) argument as well:
Promise.resolve("hey we resolved")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// => 2 = here we are using the (Async-Await) method:
// here we will learn about that how we can use it with the promises:and how it will help us to write promises in more clearer-style:
// IMP => 1 = we can put (async) function infront of any (function) which we have created with the help of (async) keyword:
// V.IMP=> 2 = Await can only be used before those functions which returns a promise. Async functions always return a promise.
// => 3 =  here we did not have to use the (Promsie) constructor to create the (promise) object:because we know that (async) function always return the (promise) Object:
async function asyncTask() {
  return "resolved";
}
// V.IMP = if (async) function always return's the promise:then we can use the (promise) handler- methods on the (async) function directly:To handle the promise:
asyncTask()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// V.IMP = here we see that:how and why we can use the (await) method with in the (async) function:
// here we have the function:which basically returns the (promise) that we have created with in it:
// V.IMP = here this function act as  a (server):
function getData() {
  return Promise.resolve("get the data from the server");
}
// here we have the async-function:which basically also return the promise:
async function abc() {
  // IMP = here with in the (async) function:we are calling the another-function which is basically also returning us the (promsie):
  // we are calling the function through (await) method:
  // V.V.IMP = Await statements make asynchronous calls behave exactly like synchronous calls:
  // V.IMP = here we gonna call that server with the help of its (API):
  const data = await getData();
  console.log("with in aysnc-function:->", data);
  // after getting the data from the server:with the help of its (api):we gonna return that (data) from this (async) function:
  // so we can use the (data) in our application:
  return data;
}

abc().then((data) => {
  console.log("handle async-data through promise-handler methods:-> ", data);
});
console.log("1");


// V.IMP =>1 =  calling another promise with in the (async) function:without the help of (await) method:
const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 1!", 100);
    });
  });
const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 2!", 100);
    });
  });
function asyncAwait() {
  // V.IMP = if we did not call the promises:through the await-methods with in the async function:
  // then we have to handle promises:through the (promise) handler methods:with in the async function:
  promise1()
    .then((result) => {
      console.log(result);
      return promise2();
    })
    .then((result) => {
      console.log(result);
    });
}
asyncAwait();
// V.IMP => 2 =  calling another promise with in the (async) function:with the help of (await) method:
const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 3!", 200);
    });
  });
const promise4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved 4!", 200);
    });
  });
async function asyncAwait1() {
  // V.IMP = if we call the promises with the help of (await) method:
  // then we did not have use the promise-handler methods:with in the (async) function:
  // V.IMP = because the await method will basically get the data of that promise for us:
  // and we can store that data by creating a variable in the async function:
  const result1 = await promise3();
  const result2 = await promise4();
  // => 1 =  we can use the promise (data) with in the async-fucntion as well:
  console.log(result1);
  console.log(result2);
  // => 2 = or what we can do is after getting the data:we can return that data from this async function:and use it in our application from outside this function:
  return result1;
}
// here we are using that (data).In our application:and we are getting that data by using the of (promise-hanlder) method on the async-function: because it will also return us the promise:
asyncAwait1().then((data)=>{
  console.log(data);
})
