// Import the (express) through (require)function:

const express = require("express");

// after installing (cookie-parser) package:
// we have to (import) it in our (server-file):
const cookieParser = require('cookie-parser');



// after importing (express):connect it with the any (variable):
// so we can use it easily:here we create (app) variable:

const app = express();

// after that we have to define the (port) number:
// for our Express  (app) or (webpage):

const port = 8000;





// here we are using our (layout-file) from the (view's-folder):
// under that (layout-file):we basically create a layout for our (web-site):
// we can create  as much as (layouts) for our (website): acc to the (web-pages) that we have for our (web-site):

// => for using that (layout-file):
// => first we have to Import the (library) of (layouts);
const expressLayouts = require('express-ejs-layouts');




// here we are (Importing) database: In our (server-file):
const db = require('./config/mongoose');




// here we are creating a (middleware):
// between (user) and the (browser):
app.use(express.urlencoded());



// after getting (middleware) between (user) and the (browser):
// know we can use the (cookie-parser) package or function:with our (server-file) or we can say with our (express-app):
app.use(cookieParser());




// here we are giving the (static-files) to our (web-site):
// for giving the (static-files) or connecting the (static-files):with the (server-file): 
// we have to use the (static) function:and under that function we have to define the (folder-name): were we have our (static-files):

app.use(express.static('./assets'));





// we have to use the (layouts-file):before the (routers):
app.use(expressLayouts);



// here we are setting two  properties for the web-site's different (web-page's)  (style-files) or for there (script-files):
// so that there (link-tags): does not show under the (body-tag) of the (layout-ejs) file:

// => first we use (layout extractStyles) property for the (style-files) and set it to the (true):
app.set('layout extractStyles', true);

// => seccond we use (layout extractScripts) property for the (script-files) and set it to the (true):
app.set('layout extractScripts', true);




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
