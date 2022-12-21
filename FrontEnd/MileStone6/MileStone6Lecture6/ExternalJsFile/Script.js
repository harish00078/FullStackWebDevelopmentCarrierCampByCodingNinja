// here we are creating event:
var helloButton2 = document.getElementById('btn2');

// here we are creating a event-handler function:
// but we are creating a full function under the handler its self: we can also create it separatly:and only provide the name of the function as well:

// helloButton.addEventListener('click',function(){
// alert('HII!!');
// })

// like here we are firslty creating a function separatly for the event-handler: 
// Imp = the importance of creating function separatly: we can use it in any other event's handler also:
// other we can also use this in the (attributes) also:In the html-file:when we are creating a event in the html-file through attributes:

function sayHello(){
  alert('hey! how are you there:');
}
// create one more function for the second-handler of the event:
function sayByee(){
  alert('Bye to every-One');
}

// after that while creating event: we can simply provide the (name) of this function to the handler:like this:
helloButton2.addEventListener('click',sayHello);
// we can also provide the more than one (handler-function) to the event:like this:
helloButton2.addEventListener('click',sayByee);
