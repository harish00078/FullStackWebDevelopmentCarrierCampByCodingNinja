const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

// here we are importing  the (express) library named as (Session) for (encrypting): our (cookies):
const session = require("express-session");

// after that  we need to import the (passport): for the user's (authentication):
const passport = require("passport");

// and also have to import the (possport-strategy):that we have created for the user's (Authentication):
const passportLocal = require("./config/passport-local-strategy");


// here we (Import) the (mongo-store): through the (connect-mongo) library:
// or we can say that (mongoStore) is basically a (connect-mongo) library:
const MongoStore = require('connect-mongo');


// here we import our (SassMiddleware):
const sassMiddleware = require('node-sass-middleware');



// here we use or we can say create (sassMiddleware):for our (css) files:
app.use(sassMiddleware({

  // for connecting the (scss) files with our (css) files:

  // first:we need our (scss-files) in the middleware:
  src:'./assets/scss',
  
  // second:we have to define that were we have to put (our) css-files:
  // that we get from those compile (scss-files) through the (middleware):
  dest:'./assets/css',

  // here we have (debug) mode:that will tell us about the (errors):if it has (errors) while (compiling) the files from one-form to another-form:
  debug:true,

  // we also have to tell the (style) of the scss-files:
  outputStyle:'extended',

  // we also have to define the (prefix):
  // prefix basically use for when we want to gave the more (priority) to the particular types of the files:
  // because browser does not understand the (scss):all also (scss) is basically  the middlware between the (css) or the (browser):
  prefix:'/css'


}));



app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);



// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// here we use express's (session) library in our (express) app:for (encrypting) our (app's) (cookies):

app.use(session({
    // here we have to gave the (name) of the (app):which app's cookies we want to be (encrypted):
    // we can say our my (app) or (codeial-app) is a (Cookie):which we want to be (encrypted):
    name: "codeial",

    // and here we have to provide the (key):that will work as a (encryption) for my (app):
    // this is basically helps us to (encode) or (docode) the cookies:
    // currently we are not (deploying) this (app):so we can can create any (random) key:
    // IMP = but when we (deploy) our (app)'s:for that we have create the (unique-key):and that (key) we did not have to share with any-one-else:

    // => meaning of secret:This is the secret used to sign the session cookie. This can be either a string for a single secret, or an array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests. The secret itself should be not easily parsed by a human and would best be a random set of characters:
    // Best practices may include:

    // The use of environment variables to store the secret, ensuring the secret itself does not exist in your repository.
    // Periodic updates of the secret, while ensuring the previous secret is in the array.
    // Using a secret that cannot be guessed will reduce the ability to hijack a session to only guessing the session ID

    secret: "blahsomething",

    // => meaning of (saveUninitialized):It Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. 

    saveUninitialized: false,

    // => meaning of (resave):Forces the session to be saved back to the session store, even if the session was never modified during the request.
    // The best way to know is to check with your store if it implements the touch method. If it does, then you can safely set resave: false. If it does not implement the touch method and your store sets an expiration date on stored sessions, then you likely need resave: true.

    resave: false,

    // here we are giving the life-line to the (cookie):
    // after sometime that (cookie) or we can say that (session) will (automatically) get over:if we did not using a  (web-site):
    // for example like: (bank) web-sites:if we did not do any work on them:then after sometime they will automatically get (expired): and tell us to (login) again:if you want to use the (website):

    // => meaning of cookie-MaxAge:Specifies the number (in milliseconds) to use when calculating the Expires Set-Cookie attribute. This is done by taking the current server time and adding maxAge milliseconds to the value to calculate an Expires datetime. By default, no maximum age is set.
    cookie: {

        maxAge:(1000 * 60 * 100)
    },
    // here we use the (MongoStore):for storing our (session-cookie):
    // we have to  connect the (MongoStore):with our (database) through inbuild (mongoUrl) function:
    // so that we can store our (session-cookie) in our mongodb = (database):
    store: MongoStore.create(
      {
      // here we connect our (MongoStore) with our (database) through inbuild (mongoUrl) function:
      // under (mongoUrl) function:we basically have to provide the (link) of our (mongodb) database:

        mongoUrl:'mongodb://127.0.0.1:27017/codeial_development',
        autoRemove:'disabled'
      },
      //create  function: for check that if we have any (error):while connecting the (mongoStore) with the (database):
      function(err){
        console.log(err || 'connect-mongodb setup ok');
      }
    )



  }));



//   here we connect our-app with (passport):so that our-app can (Authenticate) through the (passport);
//  for that we have to the (initialize) function:
  app.use(passport.initialize());

  // after that we also have to connect our (passport) with the (session) function that we have created:In our (app):
  // IMP = because the (passport) basically handles all the (sessions):
  app.use(passport.session());

 
  //  here we are using the function: that we have created in the (passport-file):
  // this function will set the (user) to the (locals) or we can say to the (views):
  // so that (user) can access the (profile-webpage) with its (own-profile) :
  // it basically works like a (middleware):
  app.use(passport.setAuthenticatedUser);



  // use express router:
  app.use("/", require("./routes"));



app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
