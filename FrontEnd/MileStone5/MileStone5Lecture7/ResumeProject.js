// we  are  giving a smooth-scroll function to the webpage:
// (window) will have two (scroll) function:
// first = (scrollTo):
// second = (scrollBy):

// first we are learning about (scrollTo):
// Imp = It is  more  basically used to go on the particular location on the webpage by (scrolling) and  providing a (pixel) density to it: that's why its only (working) for the one-time:
// we can scroll in the two ways:
// 1 = (horizontal) = (x):
// 2 = (vertical) = (y):
// here we have to provide the travel density in the form of (pixels):

// window.scrollTo(0,200);


// second option that we have is (scrollBy):
// IMP = but in the (scrollBy) function.we are providing  the (steps) to the  webpage. acc to that we can scroll on the webpage:
// we can scroll in the two ways:
// 1 = (horizontal) = (x):
// 2 = (vertical) = (y):
// here we have to provide the travel density in the form of (pixels):
window.scrollBy(0,100);


// here we are creating a smooth-scroll for the webpage:

// =>for creating a Smooth-scroll for the webpage.we have to slow the speed of the scrolling function:

// => for that we can use the other function of the javascript named as (setInterval):that will help us to lower the speed of the scroll function.so we can scroll smoothly on the webpage:

// => but we can not directly use the (setInterval)function.because it will not stop until we did not reach the end of the webpage:that's what the (setInterval)do:

// => To stoping it from that we can create the logic: 
// 1 = for that we can  giving him a (target-travel) value:like this much pixel it has to travel:
var targetPos = 1000;
// 2 = and we can create a another variable that will check or track  that it (travel) that much pixels or not:
var currentPos = 0;
// 3 = and then we can create a (setInterval) function:
var scrollInterval = setInterval(function(){
  // 4 = under that setInterval fucntion.know we have to stop the setInterval function from running.when we travel or scroll on our webpage acc to the (pixel) density that we have given to out (targetPos) variable.we can check that were we have to stop running the (setInteval) function.
  // 5 = when our (cuurentPos) becomes greatat than or equal to the (targetPos):then we have to stop the (setInterval) function.by using its (clearInterval) property:
  if(currentPos >= targetPos){
    clearInterval(scrollInterval);
    return;
  }
  // 6 = we can also do that if  we did not reach our position on the webpage.were we want to go.for that we can add or gave the more pixel density to the (currentPos) variable:
  currentPos += 50;
  window.scrollBy(0,50);

  
},50);
