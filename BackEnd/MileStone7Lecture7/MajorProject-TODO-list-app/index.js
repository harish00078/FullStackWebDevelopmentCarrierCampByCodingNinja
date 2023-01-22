const express = require('express');

const app = express();

const port = 8000;



// here we import or connect mongoose or we can say our database:
// with our express-app:
const db = require("./config/mongoose");



app.use("/",function(err){

  if(err){
    console.log('error',app.use);
    return;
  }
  // here we connect with  our router:
  return require('./routes/home_router');

});

// here we connect (express) with the (app) variable:
// const app = express();

// here we set the (EJS) view-engine for our (express-app):
app.set("view engine","ejs");

// here we are providing views to our (view-engine):
// from the (views) folder:
app.set('views', "./views"); 












app.listen(port,function(err){

  if(err){
    console.log("errror while running the server",err);
  }

  console.log("server is running fine on port : ", port);
})