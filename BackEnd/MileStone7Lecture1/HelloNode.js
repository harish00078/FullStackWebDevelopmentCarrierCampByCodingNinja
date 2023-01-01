console.log("hello world!")

function add(a,b){
  return a + b;
}

console.log(add(5,9));

// under Node.js we have a property named as (process.argv):that we can used to see that what are things we are using in our computer for this (js) file:
console.log(process.argv);

var args = process.argv.slice(2);

console.log("adding the number: ",add(parseInt(args[0]), parseInt(args[1])));