// here we are creating the (AJAX) request:with the help of (jquerY):

// IMP = one way to create a (AJAX) request:with the help of (jquerY):
// 2 = here we creating (function) for the (AJAX) request

function fetchRandomDogImage() {
  //   // under this function:we will create our (ajax) request:
  //   $.ajax({
  //     // In ajax request: we have to define the (url) parameter:
  //     // In (url) parameter we will basically tell the (ajax) req that  were it has to go:for the (response) of the (user's) event:
  //     // like were we can gave the (API) or the  (server) url to the (ajax) request:
  //     url: "https://dog.ceo/api/breeds/image/random",

  //     // after that we have to define the (method) of the (ajax) request:
  //     method: "GET",

  //     // and then we have to define the (success) method or function:if the (ajax) request  successfully get (executed):
  //     // or we can say that if it successfully able to get the (response):from the (url) that we have given to him:
  //     // because if (ajax) requests (successed):then it means it will also have the (response) from the (url) that we have given to him:

  //     // the (data) argument in the (function) represents the (response) data:that we are getting from the (url) that we give to the (ajax) request:
  //     success: function (data) {
  //       // after that we have to (use) that (data) for our event- handler:
  //       // so the (ajax-req) response will have the (data) in  the form of (json):
  //       // In (json) we have to (objects):
  //       // first is the (status) of (ajax-req) response:
  //       // second is the (message):which will have the (data) of the (response):that we want from that (url) that we have given to that (ajax) request:
  //       var imageUrl = data.message;

  //       // In response we are basically getting the (random-image) from that (url) or we can say (api):
  //       // and we have to gave that (image) to our (image-tag):so that we can show that (image) on the screen or webpage:
  //       // we do that with the help of (jquery):
  //       $("#dog-image").attr("src", imageUrl);
  //     },
  //   });




  

  // IMP = second way to create the (AJAX) request with the help of (jquery):

  $.get("https://dog.ceo/api/breeds/image/random", function (data) {


    var imageUrl = data.message;


    $("#dog-image").attr("src", imageUrl);


  });



}

// 1 = first we need to import the (element) from the (html-file):through which we will create our (AJAX) request:to the (API) OR to the (server) we can say:
$("#fetch-dog-image-button").click(fetchRandomDogImage);
