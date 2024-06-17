// here we Learn about two function types of js:
// 1. Pure functions:
// 2. Impure functions:

// => Pure Functions:A pure function is a function that always returns the same output as be give him the same input and has no side effects:
// => we have two types of pure functions:
// -> first are our own created pure functions:
// -> second are built-in pure functions in js:

// => 1 = our own created pure functions:
// here are some examples of our created pure functions:
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
// here we are calling our own created pure functions:
console.log(
    add(2,5),
    multiply(2,5)
)
// => 2 = built-in pure functions in js:
// -> Math.abs()
// -> parseInt()
// -> JSON.Stringify() and many others

// => Impure functions:An Impure function is a function that either modifies variables outside of its scope,mutates its input arguments,has I/O operations as well such as reading from or writing to a file or database,or has other side effects that are not purely computational.
// IMP = In simple words it can basically be any function that is not pure.and we call that because it can access and manipulate values of other variables with in him:

// these are also two types of impure functions:
// -> first are our own created impure functions:
// -> second are built-in impure functions in js:

// => 1 = our own created impure functions:
// here is an example of impure function:
const message = 'Hi';
function myMessage(value){
    // => we can return values from function in two ways:

    // -> 1 = first is the simple one which we always use:
    // return message + ' ' + value;

    // -> 2 = second is by using template-literals which is the most efficient way:
    return `${message} ${value}`
}


// here we are calling our own created impure functions:
console.log(
    myMessage('harish')
)
// => 2 = built-in impure functions in js:
// -> Math.random()
// -> console.log()
// -> Date.now()
// -> Array.sort()
// -> Array.splice() and many others 