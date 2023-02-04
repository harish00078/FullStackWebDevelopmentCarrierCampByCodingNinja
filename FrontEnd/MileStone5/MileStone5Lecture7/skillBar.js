// for creating animation on the (skill-bar) section: we have to follow some few things:
//  1 = first: we have to handle the (scroll) event on the (webpage):

// 2 = second: we have to (check) the (skill-section) after the each (scroll):that we made on the (webpage):

// 3 = third: we have to ensure that initial-width  of the colored skill-divs is (zero):basicallu we have to ensure that they should (initialised/reset)  to (zero) width value:

// 4 = fourth:we have start the animation on the (every-skill):because we want to animate the every skill of the (skill) section:for that we have to increase the skill-width from (zero) to (skill-level) at a (regular-interval):that we have given to that each particular skill:

// 5 = fifth:for  doing that (width-increment) animation acc to the level of the skill: we have to store that (skill-level) of the (each-skill):we can do that with the help of html's (data) attribute:


// here we get all the (skill-progress) parts:that we want to be (animate):
// through the (querySelector) function:
var progressBars = document.querySelector('.skill-progress > div');

// after that we get all the (containers) of our (skills):through (getElementById) function:
// here we try to do that:if we get the (skills-container):while scrolling on the (webpage): and we have to trigger our (skills) animation:
var skillsContainer = document.getElementById('skills-container');


// here we use (scroll) function:because be have to create our (skill) animation under the (scroll) function: we connect the (scroll) function with the (checkScroll) argument: 
window.addEventListener('scroll',checkScroll);

// here we create varaible and set its default value to the (false):we will use this (variable): for when we want to represent to the (animation) function that the (animation) is done:
// and at that time will (change) this  (variable) value to (true):so that (animation) function does not get (repeat) it self again and again on  a (particular) time:
var animationDone = false;


// here we create (initailiseBars) function:because acc to our (animation):at the (starting) of the (animation) the (skill-containers) should be at (zero) percent:
function initailiseBars(){

  for(let bar of  progressBars){


    // HERE WE  THE (zero) percent width to the style of the (skill-progess);
    bar.style.width = 0 +  '%';

  }
} 



// here we create another function (fillBars):under this function be will basically (fill) our (skill-progress): acc to the (values) that we have given to those  (skills):
function fillBars(){
  
}








// we connect the (scroll) function with the (checkScroll) argument: 
// and we use that (argument) as function: and under that (checkScroll) function be basically write our (code) for the (skill) animation:
function checkScroll(){

  // here we first have to check that the  skills-container is visible or not on the (webpage):while be are scrolling on the (webpage):
  // so we have to check the (skill-container) through its (coordinates):
  // we have to get the (coordinates) of the (skill-container):through getBoundingClientRect() function:
  var coordinates = skillsContainer.getBoundingClientRect();
  
  // after that we need its (top) coordinates:so that we can check were its (starts): and we also have to check that were it (endS).for finding out that we can use the (innerHeight) property:
  // and we also use the (animationDone) varibale:so that our (animation) function does not get trigger again and again by itself for a particular time:
  if(!animationDone &&  coordinates.top < window.innerHeight){

    // if (skill-section) get animated them: we have to put the (animationDone) varible to (true): so that our (animation) function does not get (trigger) again:
    console.log('skills section visible');


    // fillBars();

  }

}