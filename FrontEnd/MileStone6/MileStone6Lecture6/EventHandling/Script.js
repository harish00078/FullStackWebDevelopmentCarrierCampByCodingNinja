// here we are using the javascript for creating a event to  the webpage button element:

// 1 = for that first we have to get that element:and store it in the variable of the javascript:
var hellobutton = document.getElementById('btn');

// 2 = for creating a event through the javascript.we have to use the (addEventListener)property:
// under this (addEventListener) property we have to define the two values:to trigger the event:
// 1 = first is the action  or event that we want to use.like(click):

//2 = second is the handler that we have to provide.if that event or action accour:for handler we can provide the function: let say we can provide the  alert function:

// here we create a function:that we providing to the event-handler:
function Hello(){
  alert("hello!!");
}

// here we are creating a event:using (addEventListener)property:
hellobutton.addEventListener('click', Hello);


// IMP = we did not have to create the handler function for the event speratly:we can create it with in the javascript(event-handler) property also:like this:

// hellobutton.addEventListener('click',function(){
//   alert("hello boss");
// })
