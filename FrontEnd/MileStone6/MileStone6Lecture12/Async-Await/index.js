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
Promise.resolve("hey we resolved").then((data) => {
  console.log(data);
}).catch((error)=>{
    console.log(error);
})

// => 2 = here we are using the (Async-Await) method:
// here we will learn about that how we can use it with the promises:and how it will help us to write promises in more clearer-style:
// IMP => 1 = we can put (async) function infront of any (function) which we have created with the help of (async) keyword:
async function asyncTask(){
    return "resolved";
}