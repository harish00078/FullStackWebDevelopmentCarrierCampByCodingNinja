// here we have example related to the callback-functions:
// => 1 = here we have function:
// with in that function:we are passing the two arguments:
// first argument is basically the data related to the (user):
// second argument is basically the another-function: or we can say the callback-function:which we are passing to this function:
function greet(age,callback){
    console.log(`I am ${age}`);
    // here we are calling the another or we can say the callback function:
    callback();
    
}
// here we have created the callback function:
function askQuestion(){
    console.log('what is your age');
}

// here we are calling the main function:
// and passing the arguments to it:
greet(24,askQuestion);

// why we need callbacks:
// => 1 = one-way of utilizing the callback:here we are using it in the simple manner:
// IMP = we will understand that  with the help of example:
console.log(1);
setTimeout(function(){
    console.log(2)
},1000)

console.log(3)

// => 2 = another way of utilizing the callback:here we are using it with in the (promise):
// IMP = we will understand that with the help of example:
// here we are using the two callback function:
// => 1 = first callback function is with in the (promise) object or contructor:
// which basically get triggered when the (promise) get satteled:
var promise = new Promise(function(resolve,reject){
    resolve(97);
})
// => 2 = second callback function:we are using to handle the (value) or (data) or the satteled (promise):
promise.then(function(data){
    console.log(data);
})