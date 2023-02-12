
// here we create function for the (click) event:

function fetchRandomDogImage(){

  // here we use (AJAX) METHOD:
  // for using (API):
  // =>first we have to create the (resquest) method:through that  we can connect with the (API):
  // => or we can say able to send Our (req) to the (API):

  // In under (AJAX) for the  connections: we basically use the (XML) method:

  // 1 = so for creating connection with (API):here we use the (XML) method:

  var xhrRequest = new XMLHttpRequest();

  // here we create function or handler:for when we get the (response):from the (API):
  // for that we have to use the (onload) function:where we define that:but we have to do with the (response):that we are getting from the (api):
  xhrRequest.onload = function(){

    console.log(xhrRequest.response);

    // after getting response from the (API):WE have to convert that (json) string-object into the (javascript) object:with the help  of (JSON.parse()) function:

    var responseJSON = JSON.parse(xhrRequest.response);

    // so In json:we have to things:
    // => first is status of (api) response:
    // => second is the (link) of the (response):that we want from the (api):that is basically the (massege)key in the (json) object

    // so here we only have to use the (massege)key of the (json) object:which will have the random dog (image) link:
    var imageUrl = responseJSON.message;

    // after that we have to gave that (url) to the (Img-tag):we are doing that with the help (jquery) library:
    // because through that (IMG-tag): we basically show that (image) on the (webpage):

    $('#dog-image').attr('src',imageUrl);



  };



  // 2 = after that we have to (open) that request or connection or we can say create the  (request):and gave the (values) or (variables) to that (request):so that we can get the (response) from the (API):that we want:

  // for creating (req) in that (xml) connection: we have to gave the (three)) things:
  // = first the (http) resquest method:
  // = second is the (linK) of  the (api):
  // = third is the (connection) method between two (devices):means (synchronous) or (ASynchronous)
  // (true): represent (ASynchronous);by default it is (ASynchronous):
  // (false): represent (synchronous);
  xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);

  // after that we have to send this (req) to (API):
  xhrRequest.send();






}


// here we are using the (jquery):for Importing the (id) from (html) file: 
// through the (jquery) on the id (fetch-dog-image-button):we basically create a (click) event: 
$('#fetch-dog-image-button').click(fetchRandomDogImage);