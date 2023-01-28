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
// window.scrollBy(0,100);

// here we are creating a smooth-scroll for the webpage:

// =>for creating a Smooth-scroll for the webpage.we have to slow the speed of the scrolling function:

// => for that we can use the other function of the javascript named as (setInterval):that will help us to lower the speed of the scroll function.so we can scroll smoothly on the webpage:

// => but we can not directly use the (setInterval)function.because it will not stop until we did not reach the end of the webpage:that's what the (setInterval)do:

// => To stoping it from that we can create the logic:
// 1 = for that we can  giving him a (target-travel) value:like this much pixel it has to travel:
// var targetPos = 1000;
// 2 = and we can create a another variable that will check or track  that it (travel) that much pixels or not:
// var currentPos = 0;
// 3 = and then we can create a (setInterval) function:
// var scrollInterval = setInterval(function(){
//   // 4 = under that setInterval fucntion.know we have to stop the setInterval function from running.when we travel or scroll on our webpage acc to the (pixel) density that we have given to out (targetPos) variable.we can check that were we have to stop running the (setInteval) function.
//   // 5 = when our (cuurentPos) becomes greatat than or equal to the (targetPos):then we have to stop the (setInterval) function.by using its (clearInterval) property:
//   if(currentPos >= targetPos){
//     clearInterval(scrollInterval);
//     return;
//   }
//   // 6 = we can also do that if  we did not reach our position on the webpage.were we want to go.for that we can add or gave the more pixel density to the (currentPos) variable:
//   currentPos += 50;
//   window.scrollBy(0,50);

//   // here we gave time to our (setInterval) function:
//   // here (50) present a time of (50) millisecond:
// },50);

// here we are creating a smooth-scroll: for our (resume-sections):like (education,contacts)etc:

// => for that first we need the (section):
// 1 = for using a (particular) section:
// 2 = we have to get it first in our (js-script) file:with the help of (document) function's.property named as (getElementById or class):
// 3 = and then store it in (varaible): so we can use it:

// var educationSection = document.getElementById('education');

// => after that we need to find-out its (coordinates) or we can say its (position) on the  webpage:
// 1 = for that we can use the (getBoundingClientRect) property:

// var coordinates = educationSection.getBoundingClientRect();

// IMP = after learning all the things:
// know we have to create the (smooth-scroll) for all the sections of our (web-page):

// 1 = first we need to (get) all the (anchor-tags) of the (header-section):
// because we are basically using the (anchor-tags): for creating (smooth-scroll) on all the (sections) of the (webpage):
// because we use the  (anchor-tags) for connecting the (WEB-PAGE) sections with the (headers):

// IMP = we also had to (stop) the (default) function of the (anchor-tag):so we can create the (smoth-scroll) (event) or (action) on  that (section):

// here we  are getting all the (anchor-tags):with the help of (querySelectorAll) property  of (doucment) function:
// we are using (nav-menu): this is our (class):under this class we basically have created our all the (achor-tags) for connecting the (webpage) sections with there (headers):
// and here (a) represent the (achor-tags):

var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");

// here we are printing:them so we can check that  we are getting the (correct) anchor-tag:
console.log(navMenuAnchorTags);


// here we creaate the (interval) variable globaly:so it can connect witht the (scroll) function: that we have created (separately):
var interval;

// here we create for-loop so we can go on every (anchor-tag):
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  // here we create a (smooth-scroll) (Event) on the (anchor-tag) that we are getting from the (navMenuAnchorTags) variable:

  // here we are also using that (event) in the (function): so we can (stop) the (default) working of that (anchor-tag) with the help of (preventDefault()) function:

  // after that then we are only able to create the (smooth-scroll) Event on that (anchor-tag):

  navMenuAnchorTags[i].addEventListener("click", function (event) {
    // here we use the (preventDefault()) function:so we can (stop) the (default) working of the (anchor-tag):
    event.preventDefault();

    // after getting the (anchor-tag):know we need  to check that using tag (anchor-tag): In which (section) of  the (webpage) we want to go:
    // so for getting the (sections) of the webpage: we can use the (content/text):that we given to the every (anchor-tag) acc to its (webpage) (sections):

    // IMP => for getting the (content) of the (anchor-tag): we can use the (this) funcion:
    // because when we have (anchor-tag):the (this) function will gave us the (content) of that (anchor-tag):

    // we also convert that (convert) that (content) into the form of (lowercase):
    // because we are store them here in the (form) of (ID): and (ID)'s mostilly create in the (lower-case):
    var targetSectionID = this.textContent.trim().toLowerCase();

    // here we are printing that (content):so we can check that we are getting the (right) content acc to the (anchor-tag) that we have:
    console.log(targetSectionID);

    // after that we have to create the another (varaible): were we (store) our (ID) or we can say our  (content/text): that we are getting from the (targetSectionID) varaible:

    // so we can create (smooth-scroll) function on that (section) of the (webpage):

    var targetSection = document.getElementById(targetSectionID);

    // // we need to create anther variable: were we are getting the (coordinates) of that (content) or we can say that (section):
    // // basically we are using the (coordinates) of the (sections): so we can create (smooth-scrolL) on the (sections):
    // // for getting the (coordinates) of that section: we need to use the (getBoundingClientRect) function:

    // var targetSectionCoordinates = targetSection.getBoundingClientRect();

    // after getting the (section) or its (coordinates):know we can create (smooth-scroll) function on  it:
    // with the help of (setInterval) function:

    console.log(targetSection);





    // here we create (scroll) function: for particular webpage:

    // // here we create the (smooth-scroll) function (under) the (particular-webpage):
    // // we can aslo create it (separately):so we can use it for anyother (webpages)also : if we have a (multiple) webpages in our website:

    // // here we are creating (Interval) for the  (smooth-scrolling) of every (section) of the (webpage):
    // var Interval = setInterval(function () {
    //   // we need to create anther variable: were we are getting the (coordinates) of that (content) or we can say that (section):
    //   // basically we are using the (coordinates) of the (sections): so we can create (smooth-scrolL) on the (sections):
    //   // for getting the (coordinates) of that section: we need to use the (getBoundingClientRect) function:

    //   // IMP = we are  checking the (coordinates) of the (section): here so when ever we (scroll) on (webpage): after that we have to (check) its (coordinates): to see that we (reach) the (top) dimensions to (zero) or not:
    //   var targetSectionCoordinates = targetSection.getBoundingClientRect();

    //   // we are using the (coordinates) of the (section): to tell the (interval): that were we have to (stop) the (interval) or clear the (interval):

    //   // IMP = when we are at (top) of the (webpage):the (top) will have its (dimensions):
    //   // but we reach the (particular) (section) of the (webpage): then that (top) dimensions will become (zero):
    //   // so we have to clear or stop our (interval): when the (top) coordinate will get the (dimensions) of (zero):

    //   if (targetSectionCoordinates.top <= 0) {
    //     clearInterval(Interval);
    //     return;
    //   }

    //   window.scrollBy(0, 50);

    //   // here we are giving the (50 = millisecond) time to our (interval) function:
    // }, 30);




    // here we are using (scroll) function:that we have created separately:so we can use it another web-pages as well:
    // here we are using the (scrollVertically) function:that we have created separately:
    // we aslo have to provide  him the (targetSection): so it stop on the (right) or we can say on the (particular)  section of the (webpage):
    // we create (interval) variable globaly:so can use the (scroll) function that we have create (separately):

    // interval = setInterval(scrollVertically,20,targetSection);

    // we can write the  function in this way also:
    interval = setInterval(function(){
      scrollVertically(targetSection);
    },20);




  });



}




// here we are creating a (scroll) function separately: so we can use it:
// for another-pages as well: if we have another web-pages in our website:


// here we are creating (Interval) for the  (smooth-scrolling) of every (section) of the (webpage):
// we also have to provide him the (targetSection): so it will stop on the (right) or we can say on the (particular) section of the (webpage):
function scrollVertically(targetSection) {
  // we need to create anther variable: were we are getting the (coordinates) of that (content) or we can say that (section):
  // basically we are using the (coordinates) of the (sections): so we can create (smooth-scrolL) on the (sections):
  // for getting the (coordinates) of that section: we need to use the (getBoundingClientRect) function:

  // IMP = we are  checking the (coordinates) of the (section): here so when ever we (scroll) on (webpage): after that we have to (check) its (coordinates): to see that we (reach) the (top) dimensions to (zero) or not:
  var targetSectionCoordinates = targetSection.getBoundingClientRect();

  // we are using the (coordinates) of the (section): to tell the (interval): that were we have to (stop) the (interval) or clear the (interval):

  // IMP = when we are at (top) of the (webpage):the (top) will have its (dimensions):
  // but we reach the (particular) (section) of the (webpage): then that (top) dimensions will become (zero):
  // so we have to clear or stop our (interval): when the (top) coordinate will get the (dimensions) of (zero):

  if (targetSectionCoordinates.top <= 0) {
    clearInterval(Interval);
    return;
  }

  window.scrollBy(0, 50);

}
