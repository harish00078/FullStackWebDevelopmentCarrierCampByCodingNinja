// here we create animation on the (each) or (particular) skill-bar:
// because we only have to (fill) the (skill-bar) which are (currently) showed on the (webpage):
// not all the  (skill) bars we have to (fill):when we reach the (skill) section:

var progressBars = document.querySelectorAll(".skill-progress > div");

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);


function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
  initialiseBar(bar);
}



function fillBar(bar) {

  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
      if (currentWidth >= targetWidth) {
          clearInterval(interval);
          return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
  }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {
  // here through for-loop:we are getting the (each-bar):or we can say traverse on the each-bar

  for (let bar of progressBars) {

    // here we get the (each) bar's coordinates:which-ever bar is show on the (web-page):

      var barCoordinates = bar.getBoundingClientRect();
      
      // and here we work on them:

      if ((bar.getAttribute("data-visited") == "false") && (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {


         bar.setAttribute("data-visited", true);

          fillBar(bar);
      } else if (barCoordinates.top > window.innerHeight) {


          bar.setAttribute("data-visited", false);
          
          initialiseBar(bar);
      }

  }
}



