// Import the (express) through (require)function:

const express = require("express");

// after importing (express):connect it with the any (variable):
// so we can use it easily:here we create (app) variable:

const app = express();

// after that we have to define the (port) number:
// for our Express  (app) or (webpage):

const port = 8000;

// here we are using the (routers) with in our (express-app): that we have created in the (routes) folder separately:

// In this (app.use) function: we are basically importing or using the (routes) folder:
// we are basically checking. this('/') url in the (routes-folder).
// and but kind of (res) is (written) on that (url): we are using it in our (express-app):

// home (router) use:

// use express router
app.use("/", require("./routes"));

// here we connect or set our (express-app's) view-engine with the (ejs) view-engine:
// set up the view engine
app.set("view engine", "ejs");

// after that we have to gave the (ejs-views) to the (express-app):
// that we have created  in our (Views) folder:
// here we are giving the (ejs) views to the (express-app):from the (Views-folder).were we have created our  all the (ejs-views):

app.set("views", "./views");

// here we create (listen) function:
// To check our Express (app) is working or not:

app.listen(port, function (err) {
  if (err) {
    
    // instead of writing (err) out of the (console.log()) string:
    // console.log('error: ',err);

    // we can use the another method: named as (Interpolation):
    // sign of Interpolation is these tilted commas (` `):
    // using (Interpolation) method we can write the (err) under the (string):

    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
