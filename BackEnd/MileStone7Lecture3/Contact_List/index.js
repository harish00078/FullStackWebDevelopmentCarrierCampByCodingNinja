const express = require("express");
// here we are importing a In-build path module of the (node-js):
const path = require("path");

const port = 8000;

// here we are connecting the (app) variable with the (express) framework: now (app) variable will have all the functionalities of the (express-framework):
const app = express();

// now after connecting the (app) variable with the (express-framework):
// now for the further work on  the server.we will use the (app) variable directly . because it has all the functionality of the (express-framework):





// ==> if we want to use the (Template-engine) in the (Express). for that we have to tell the express that we are using the (Template-engine):
// here we are using the (EJS) Template-engine:

// for setting the (template-engine) with the (express).we have to use the (set) property:

// so here in (set) function: the (view engine) is the property and (ejs) is a value to that:

// IMP => so  basically here we are setting a (ejs) as (view engine) for the (express): it means that (template-engine) is also a (view Engine):
app.set("view engine", "ejs");


// ==> after connecting the express  with the (ejs) template/view engine:

// we also have to set the path or gave  (views) to the (ejs) view-engine with in the (server-file) or server: so the views  can easily communicate with the (server-file):


// for that we have use the (path.join) function of the (path) module:

// In path we can  simply gave the (directory) to the (views).like in this way (user/carriercamp....):

// or we can use the (__dirname) function: that will dynamically gave the directory to the views: and it very usefull function: if we want to gave my code to  any other person then that will have a different directory for the (views): so this function will automatically (detect) there directory:

// IMP =  here we are basically providing a (views) to the (ejs) view-engine: with the help of (path) module's (path.join) function: 
// here we are giving a two things in the (path.join) function:
// first is directory = (__dirname):
// second is folder-name ('view') were we create our all views.we can say store our all the (views):
app.set('views', path.join(__dirname, 'view') );








// there are different type of (HTTP-Request) function:
// these two are the major (request) functions:

// first = (GET): It is used.when the data is already represent in the database: we only need to (use) that or want that data from the database:

// second = (POST): It is used .when we want to change something in the database or data.and then access that file from the database or access that data.

// => the other (HTTP-Request) function are:
// these use with the (AJAX):

// third = (PUT): It is used. when we have already have data related to something in the database.like (student) for example: what we want to add  more data in that (student) database: for that we can use the (put) request function:

// fourth = (Patch): It is used..when we want to change something in the (already) presented data in the database.

// fifth = (DELETE): It is used: when we want to delete some particular data from the database: we will use the (delete) request function:

// here (get) is a (request-type) function:
// we can also call it (controller).acc to the (MVC) structure:
app.get("/profile", function (req, res){
  // (__dirname) is used to check the (directory) of the server.or we can say the (files-path) of the server:
  // console.log(__dirname);

  // here (send) is a (response-type) function:
  // res.send("<h1>cool,it is running ! or is it</h1>");

  // here we are using a (EJS) file in the (response):
  // and we also have to use the (render) function here for rendering a file:
  // Imp = always  remember  of using a (return) function. if we did not do that then the system will keep looking for the file:

  //  here we are giving a tittle to the webpage in the (server-file):
  // In the dynamic-way: means that here we create some object in the render-file with some value:and we use that (object) in the (title-tag) of the (ejs-file) as a variable and used its value in the title of our webpage: 

  // IMP = here (title) obect with its value is know as (locals):
  // Local => means that this object is (available) global to all of my (view) folder's-files:

  return res.render('home', {tittle:"i am harish"});

});


// here we create another controller for the another (view) to gave in  another (response):
app.get("/practice", function(req,res){

  return res.render('practice',{
    title:"let us play with EJS"
  });
});




app.listen(port, function (err) {
  if (err) {
    console.log("error in the running server", err);
  }

  console.log("yup! my Express server is running on the port:", port);
});
