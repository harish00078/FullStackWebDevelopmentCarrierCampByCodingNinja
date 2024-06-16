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

// => Impure functions: