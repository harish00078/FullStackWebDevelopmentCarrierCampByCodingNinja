// here we learn about other Mouse and Keyboard events:

// first we talk about other Mouse events:
// 1 = mouse over:is used to place mouse over the element:
// 2 = mouse out:is used to place mouse out of the element:
// there are also more other Mouse events:but here we are only talk about these two mouse events:

// MOST-IMP = Important thing it that if we want to use the particular click of the mouse for the particular work: we can use same method that we use for the (keyboard):
var outerDiv = document.getElementById("outer");

// here we are creating a (mouse-over) event on the element:
outerDiv.addEventListener("mouseover", function () {
  // when mouse-over event happend it will print (mouse over) value  on the console:
  console.log("mouse over");
});

// here we are creating a (mouse-out) event on the elment:
outerDiv.addEventListener("mouseout", function () {
  // when mouse-out event happend it will print (mouse out) value  on the console:
  console.log("mouse out");
});




// here we are talking about (keyboard) events:
// IMP = (keypress) is basically a combination of other two keyboard events: named as (keydown) and (keyup):
var searchInput = document.getElementById("search");
// here we are creating a (keypress) event on the search-element:when ever we (type) on the search-element from the keyboard.then this event will happen:
searchInput.addEventListener("keypress", function () {
  // here we are printing a statement on the console in this event.when ever we type on the search-element through keyboard:
  console.log("harish");
});

// another use of the (keypress) event is in the (games).like if  we want that where ever I use my keyboard on the hole browser window the (keypress) event will happen:means I am able to use my keyboard on the hole games browser window:
// for that we can simply create the (keypress) event on the hole-window:like this:
// IMP = important thing related to (keypress) event is that we are not able use the (arrow-keys) and also (shift,ctrl,alt tabs keys) through the (keypress) event:
document.addEventListener("keypress", function () {
  // for know i am only printing a text on the console:while typing on my keyboard in anywhere on the browser window:\
  console.log("my name is khan");
});

// here we are talking about the other Keyboard events:named as:
// 1 = keydown: as its named sayed it is used to handled the (downword) travel of the key:
// IMP = Important think about the (keydown) event's is that through (keydown) event we are to use the (arrow) and (shift,ctrl and other special keys):

// document.addEventListener('keydown', function(){
//   console.log('key down');
// });

// 2 = keyup: as its named sayed it is used to handled the (upword) travel of the key:
document.addEventListener("keyup", function () {
  console.log("key up");
});

// MOST-IMP = Important thing it that if we want to use the particular key of the keyboard for the particular work: 
// 1 =  for that firstly we should have a access of that key: and then we can gave a particular work to that key:
// 2 = for accessing the particular key of the keyboard.we can use the (event) as a  argument in the function:beacuse under (event) we have value of the key.because we are using a keyboard-events.so when ever event accour it has stores the values in it.that's why it is able to use them:
// 3 =  so we can use them or access them through a event.and gave them a particular work:


// 1 = so here we gave a (event) as a argument to the function:
document.addEventListener('keydown', function(event){
  // 2 = and here we are printing the (ASCII) value of the keybroad (keys) those we are pressing on the keyboard to check that its working or not:
  // 3 = for printing the ASCII value of the keyboard keys we have to use the (keycode) property of the javascript:
  console.log('key down', event.keyCode);
});

