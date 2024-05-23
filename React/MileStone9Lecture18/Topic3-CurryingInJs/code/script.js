console.log('Learn about currying in js');

// => 1 = here we see the simple js-function which has muliple arguments with in it:
// => here we have created the function:which has three arguments with in it:
// function sum(x,y,z){

//     console.log('sum of three number are', x+y+z);
// }
// and here we are using that function:
// sum (10,20,30);

// => 2 = here we see the js-function which has multiple arguments in it:and we have created it with the help of curring method or technique:
// Curring:Currying is defined as changing a function having multiple arguments into a sequence of functions with a single argument. When currying a function in JavaScript, closures are used to retain the values of previous arguments that have been passed to the curried function. This is because each time a new argument is passed, a new function is returned that has access to the previous arguments.
function sum(x){
     return function sumY(y){
        return function sumZ(z){
            console.log('sum of three numbers are',x+y+z);
        }
     }
}

// and here we are using function:which we have created using the curring technique:
const sumResult = sum(10);
const sumYResult = sumResult(20);
const sumZResult = sumYResult(40);
