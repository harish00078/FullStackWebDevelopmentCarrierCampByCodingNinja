const express = require('express');

const app = express();

const port = 8000;



// here we import or connect mongoose or we can say our database:
// with our express-app:
const db = require("./config/mongoose");

// here we are using the (middleware):
app.use(express.urlencoded());


// here we connect this ('/') url with  our (home_router) file:
app.use('/',require('./routes/home_router'));


// here we connect our (express-app) with (assets):
// In this (assets) folder we basically have our (static-files):
app.use(express.static('./assets'));


// here we set the (EJS) view-engine for our (express-app):
app.set("view engine","ejs");

// here we are providing views to our (view-engine):
// from the (views) folder:
app.set('views', "./views"); 




// here we craete a listen function the (server-file):
// for check our server is working well or not:
app.listen(port,function(err){

  if(err){
    console.log("error while running the server",err);
  }

  console.log("server is running fine on port : ", port);
})