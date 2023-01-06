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
    phone: "9898989989"
  },
  {
    name: "Tony Stark",
    phone: "7979797979"
  },
  {
    name: "coding Ninjas",
    phone: "797786876868"
  },
];

app.get("/List", function (req, res) {

  return res.render("home", {

    title: "contact List",

    // here we create another (Object-property):which has the (key) with it's (value):
    contact_List: contactList
  });

});

app.listen(port, function (err) {
  if (err) {
    console.log("error in the running server", err);
  }

  console.log("yup! my Express server is running on the port:", port);
});
