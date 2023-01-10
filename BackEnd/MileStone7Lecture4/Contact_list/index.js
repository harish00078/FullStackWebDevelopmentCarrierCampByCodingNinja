const express = require("express");

const path = require("path");

const port = 8000;

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "view"));

// here we are using the (PARSE) FUNCTION OF THE Express.js:
// Parse-function => means that analyze and converting a set instructions into a format that the runtime environment can understand and run:

// for using the (parse) function of the  (express.js).we have to use the (property) named as (urlencoded()):

// for using that (parsing) property we have to use the another important property named as (use):

// (use) is basically a (Middleware) property:

app.use(express.urlencoded());





// here we are creating a (contact-list). for our (Express) app:
// we are creating a contact-list using a (array):

var contactList = [
  // under array we create (object-properties): which has the (keys) with there (values):
  {
    name: "harish",
    phone: "9898989989",
  },
  {
    name: "Tony Stark",
    phone: "7979797979",
  },
  {
    name: "coding Ninjas",
    phone: "797786876868",
  },
];

app.get("/list", function (req, res) {

  return res.render("home", {
    title: "contact List",

    // here we create another (Object-property):which has the (key) with it's (value):
    // IMP = we use this (contact_List) key in the (EJS) file so we can connect with the (contactList) Objects .that we have created in the (server-file):
    contact_List: contactList,
  });
});

// here we are writing the (response) function for the (POST) request method.that we have used in the (form-tag):

// when user (use) this (req).that we write on the post(req) method: then we have to gave him a response through the (post) request method:

// here we use (post) request-method.because  It is used .when we want to change something in the database or data.and then access that file from the database or we can say then access that data.

app.post("/create-contact", function (req, res) {



  // c => for that when ever (form) get submited.after getting all the values from the user: then it will trigger (action) on the path.that we have given to him:

  // d = and  here we gave him path of the ('/create-contant').(url-request) function:

  // e = and In that (url-request) function: we are giving or providing its response to the  '/list' (url-request) function again:through the (redirect) function:

  // f = because after getting (new-contact) value from user: we also have to add that value in our (contact-list):

  // g = that why we are  (redirecting) its response to the ('/list') url-function: for adding a (new_contact)  in the (contact-list): we do that because we are printing the (contact-list) in  the response of the ('/list') url-request:





  // Redirect =  The Express framework has a res.redirect() method that redirects from an URL to a different URL with the 302 status code by default. It also accepts other status codes if necessary. The browsers will understand the redirect and load from the new URL.

  // return res.redirect("/list");
 


  // by printing the (req) function's (body). we can see that our (parse) function is working in the (console-terminal):
  // we can see that Our (parse) function will have the (form-values) in it:

  // console.log(req.body);
  // console.log(req.body.name);


  // know after getting the values we have to push them in our (contact-list):
  // contactList.push({
  //   name:req.body.name,
  //   phone:req.body.phone
  // });

  // Instead of pushing a each value separately in the (contact-list): we can simply push the (hole-object) in the (contact-list) :which have all the values in it:
  // request function's (body).will have all the values in it because of the (parse) function:so we can simple push the (req.body)  in the (contact-list):

  contactList.push(req.body);

  return res.redirect("/list");

 





});

app.listen(port, function (err) {
  if (err) {
    console.log("error in the running server", err);
  }

  console.log("yup! my Express server is running on the port:", port);
});
