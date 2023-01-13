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

// here we are using or getting our (static-files):like= css-files,js-files,images-files,etc:
// for using the (static-files): we have to use the (static) function of (express.js):
// and also have to gave the (folder-name) in that (static-function):through which (folder/file) from we are basically getting our static files:

app.use(express.static("assets"));

// here we are creating a (middle-ware):so we can learn more about the middle-ware:

// first(middle-ware):
// here we are using a another (argument) named as (next).it use to see  the next middleware:if we have another middleware then it will jump on that middleware.if we did not have another middleware then it. will directly jump on the controller acc to the current middleware's response:
// app.use(function(req,res,next){
//   // console.log('middleware 1 called');

//   // here we are giving the (value) of the (req)function's key.and access that value in the different functions.so we can check that sequence of the (code): that how it is working:
//   req.myname = "arpan";

//   // if we want to use the another Middleware that is ahead of this middleware then we have to use the (next) argument.or we can say the (next) function of the (middleware):
//   next();
// });

// // second(middleware):
// app.use(function(req,res,next){

//   // here we are accesing the (value) that we have given to the (first=middleware's) (req) function:
//   console.log('my name is from mw2',req.myname);

//   // console.log('middleware 2 called');
//   next();
// });

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
  // here we are also accesing the value of the (first-middleware's) request function:
  console.log(req.myname);

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


// here we are creating a controller for the (deleting) a contact from the (contact-list):
app.get('/delete-contact',function(req,res){


  // IMP = this (parameter) function will also works without the (urlrencoded) middleware funciton:


  // here we are using the (phone) number: as a (unique-identifier).or we can say we are using the  (phone-numbers) to delete that particular contact from the (contact-list):because some person may have a the same (name):
  
  // => we can get the (phone-number) value with two parameter-methods or we can say in two ways:

  // 1 = first is (string-parameter)method:In this method we can simply write the (parameter) with the (url):whose value we want to use:as a (unique-identifier) to delete the contact from the (contact-list):like = ("/delete-contact/:phone"): when we are using the (string) parameter we also have to write the parameter with in the (get) method 's (url):
  // and for storing the (string-parameter) value in the varaible: we have to use the (params) funtion:like in this way:

  // console.log(req.params);

  // let phone = req.params.phone;
  



  // 2 = second is the (query-parameter)method:  In this method we can write or use the as much as parameters or we can say the unique-identifiers to delete our contact from the contact-list:we can write the (query-parameters) in this way:like = ("/delete-contact/? phone=....... name=...."):but when we are using the (query)parameter we did not have to write the parameter with in  the (get) method's (url):
  // IMP = when we are using the (query)parameter: it will also shows the (parameter) with its (value) as well. on  our browser's (url):
  

  // here we are creating the varaible name(phone):were we store our (Phone-parameters) value: 
  // for using the (query)parameter we have to (declare) the (query) function with the (req) function and (parameter) as well:like in this way:

  // console.log(req.query);

  let phone = req.query.phone;


  // here we create a variable (contactIndex) under this variable:

  // we will use the (findIndex) function on the (contact-list):for checking or traversing on the (phone-numbers) of the (contact-list) until it did not find out the (phone-number) in the (contact-list) that we have in our (query) parameter:

  // or In basic words we can say that we are basically using the (findindex) function on the (contact-list) to check that the our (query) parameter (value) is represent in the (contact-list) or not:

  // FindIndex = find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
  
  // IMP = here we are using the another method of creating (functions) in the (javascript): and method is this: (=>): this sign is work as a function in the javascript:

  let contactIndex = contactList.findIndex(contact => contact.phone == phone);


  // after checking the (query-parameter) phone-number value in the (contact-list):
  // if we have that value present in the (contact-list):then we have to remove that value from the contact-list:

  // for that we are using the (splice) function:that will basically delete that particular contact from the (Contact-list): and also (re-arrange) the other contacts as well:
  if(contactIndex != -1){

    // Splice = Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    contactList.splice(contactIndex,1);
  }

  // and after deleting the contact. we also have to go back on the (contact-list): for that we are writing the (return) function here:
  return res.redirect('/list');


});






app.listen(port, function (err) {
  if (err) {
    console.log("error in the running server", err);
  }

  console.log("yup! my Express server is running on the port:", port);
});
