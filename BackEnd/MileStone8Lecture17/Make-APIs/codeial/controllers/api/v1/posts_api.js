// here we create (controller) for the (posts) api (request):
// and this controller will only  work with the (v1) version of the  (api):

// here we are creating the  (controller) for the (posts) api (request):
module.exports.index = function (req, res){

  // browser basically (connnect) with the (api):through the (json) format data:
  // because (current) time all the (Browsers) or systems:are using the (json) format (data) to connect with the each other:  

  // => IMPORTANT:
  // so here in the (response) of the (user) request to the (api):
  // we also have to gave him the (response) in the form of (json)format data:
  // for gaving json format data in the response: 
  // we also have to gave the (status) of the (user-request) in the (response):
  // because (json) format data (objects):have two things with in it:
  // first is the (status) of the (user-request) to the (api):
  // second is the (response) data that they want from the (api):
  // acc to the (request) that they gave to the (api):
  // In json object:(response) data for the (user) acc to its request to the (api):will be in the (message) key of the (json) object:
  return res.json(200,{


    // here we have (message) key of the (json) object:
    message: 'List of posts',
    posts:[]
  });

}
