// here we learn about the (Explicit-Binding):
const john = {

  name: 'John',

};

function ask(){
  console.log(this,this.name);
}

// here we call the function in simple way:
// ask();

// here we call the function in explicit way:
// because here we calling the (ask) function that we have created:with the help of  (call) function:
// and also giving the (value) to its (this) argument directly:without defining any argument in the  function:this is basically know as (explicit-Binding):
// Explicit-Binding: explicitly specifies what the value of 'this' will be:
// ask.call('john');



// if we try to call the function that we have under the (variable) object:
// through variable means store that (varible) object:in the new varibale:and then simply call that (new- variable):
// then it will does not print the (function) value:
// because (new-variable) will we basically represent the (gobal.scope):

// if we have function:under the variable object:
var raj = {
  name: 'Raj',
  greet:function(){
    console.log('hello',this);
  }
};

// and try to execute that variable-object with its function:
// then this (variable)object will work fine:

// raj.greet();

// => 1
// => one way to call the variable object function:by storing it in the (new-variable):and then simply call that new-varaible:
// but if we store this (variable)object:in the new-variable:then this variable object will not work:
// because (new-variable) will have the (gobal.scope) in it:
// var localAsk = raj.greet;

// after storing variable-object:in the new variable:
// we will call the  new-variable:

// localAsk();


// => 2
// second way to call the varaible object function:
// by storing it in the (new-variable):
// and then call that new-varaible with (hard-binding):
// this new variable will not direclty able to execute the (variable)object function:because the new-variable will have the (gobal.scope) in it:
// so for executing the (variable)object function:through the new-variable:we have to do the (hard-binding):with the help of (bind)function:

// and with the (bind) function:we also have to gave the  (this) agrument to the (variable)object function:

// because bind function will create a new object:and to that new-object we are giving the our (variable)object function as the (this) agrument:

// var localGreet = raj.greet.bind(raj);

// localGreet();




// why we are doing the (hard-binding):
var raj = {
  name: 'Raj',
  greet:function(){
    console.log('hello',this);
  }
};

// because if we try to execute this variable-object function with the (setTimeout) function:direclty:
// then it will not execute:
setTimeout(raj.greet,1000);

// but we try to execute this variable-object function with the (setTimeout) function:through the (hard-binding) function or we can say through (bind)function:
// then it will get executed:
setTimeout(raj.greet.bind(raj),1000);