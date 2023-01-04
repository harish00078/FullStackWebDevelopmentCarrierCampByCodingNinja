const express = require("express");

const port = 8000;


// here we are connecting the (app) variable with the (express) framework: now (app) variable will have all the functionalities of the (express-framework):
const app = express();

// now after connecting the (app) variable with the (express-framework): 
// now for the further work on  the server.we will use the (app) variable directly . because it has all the functinality of the (express-framwork):


// there are different type of (HTTP-Request) function:
// these two are the major (request) functions:

// first = (GET): It is used.when the data is already represent in the database: we only need to (use) that or want that data from the database:

// second = (POST): It is used .when we to change something in the database.and then access that file from the database.

// => the other (HTTP-Request) function are:
// these use with the (AJAX):

// third = (PUT): It is used. when we have already have data related to something in the database.like (student) for example: what we want to add  more data in that (student) database: for that we can use the (put) request function:

// fourth = (Patch): It is used..when we want to change something in the (already) presented data in the database.

// fifth = (DELETE): It is used: when we want to delete some particular data from the database: we will use the (delete) request function:



// here (get) is a (request-type) function:
app.get('/profile', function(req,res){
  console.log(req);

  // here (send) is a (response-type) function:
  res.send('<h1>cool,it is running ! or is it</h1>');
});




app.listen(port, function(err){
  if(err){
    console.log('error in the running server', err);
  } 

  console.log('yup! my Express server is running on the port:', port);
})