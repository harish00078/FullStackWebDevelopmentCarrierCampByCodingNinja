// know using javascript we have to create a  click count action or we can say a click count event on the box.and then we have to print that count:

// 1 =  for that first we to access the box of the webpage in the javascript.and store it the variable of the javascript:so that we can work on it:
var box = document.getElementById('box');

// 2 = second is that we also have to acccess the count element of the webpage.on that element we can  create a  click count event:like this
var clickCount = document.getElementById('click-count');
// know we have to create a variable that will we increment.when ever we click on the box.
count = 0;

// after that  we have to create a click-event.and every time we click on the box. we increment the value of that variable.and print that variables value on the webpage's count element(click-count):

// here we are creating event:
box.addEventListener('click',function(){
  // here we increment the value of that variable.every time when we click on the box:
  count++;
  // here we are printing that count value:
  console.log(count);
  // and here we are changing the clickcount value of the webpage element:using the (innertext) property of the javascript.that will help us to change the count value of the webpage's (click-count) element every time.when we click on the box:
  clickCount.innerText = count + " ";
});


