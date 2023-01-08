const express = require("express");

const path = require("path");

const port = 8000;

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "view"));

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

app.get("/List", function (req, res) {
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

  return res.redirect("/List");



});

app.listen(port, function (err) {
  if (err) {
    console.log("error in the running server", err);
  }

  console.log("yup! my Express server is running on the port:", port);
});
