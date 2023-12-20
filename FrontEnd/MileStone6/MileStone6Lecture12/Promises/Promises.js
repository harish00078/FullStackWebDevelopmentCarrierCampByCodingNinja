// here we are learning about the (promises):
// and learn about that how they with work in the (front-end):
// and why we use them in front-end:


// 1 =  creating or using promise.we need two things:
// first is the (new) method:
// second is the (Promise) method itself:

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

var promise = new Promise((resolve,reject) => {
    // if in the promise.we call the (resolve) argument or method:
    // then in console-log.we can say see that.we well get the output as (fullfilled):
    resolve();
});

console.log(promise);