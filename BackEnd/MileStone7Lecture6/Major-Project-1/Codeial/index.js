// Import the (express) through (require)function:

const express = require('express');

// after importing (express):connect it with the any (variable):
// so we can use it easily:here we create (app) variable:
const app = express();

// after that we have to define the (port) number:
// for our Express  (app) or (webpage):

const port = 8000;


// here we create (listen) function:
// To check our Express (app) is working or not:

app.listen(port, function(err){
  if(err){


    
    // instead of writing (err) out of the (console.log()) string:
    // console.log('error: ',err);

    // we can use the another method: named as (Interpolation):
    // using (Interpolation) method we can write the (err) under the (string):
    console.log(`error in running the server: ${err}`);

  }


  console.log(`server is running on port: ${port}`);

})