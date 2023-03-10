// here we learn about that:how (Import) or (Export) work in the (React):

// for example:if we have multiple (functions) in the one-file:
// then what are the ways we can export those functions:and Import them into the (other) file:so that we can use them in the other file as well:

function log(){

  console.log("log");

}

// 2 = second way of exporting functions:is that we simply add the (export) function:ahead the function that we want to export:
// this  kind of export is known as (named-export):
// we call them the (named-export) function:because we are also Import them with there names as well:

export function greet(){
  console.log("Hi");
}

function sum(){
  console.log("SUM");
}

// 2 = second way of exporting functions:is that we simply add the (export) function:ahead the function that we want to export:
// this  kind of export is known as (named-export):
// we call them the (named-export) function:because we are also Import them with there names as well:

export const a = 99;


// there are several ways to export the  functions:

// 1 = one way is the (default) way:but with the help of default way:we are only able to export the (one-function) with in the particular-file:
// like here we export the (log) function:
export default log;

