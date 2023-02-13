const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware =require('node-sass-middleware');


// here we are using the (connect-flash) library of the (npm):
// for showing (masseges) to the (user) on the (webpage):like (log-in) massege etc:
const flash = require('connect-flash');

// here we are importing our (middlware):that we have created for the (flash) messages:
const customMware = require('./config/middleware');


app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },

    store: new MongoStore(

      {

        mongooseConnection:db,
        autoRemove: 'disabled'

      },
      function(err){
        console.log(err || 'connect-mongodb setup');
      }
    )
    // store: MongoStore.create(
    //     {
    //     // here we connect our (MongoStore) with our (database) through inbuild (mongoUrl) function:
    //     // under (mongoUrl) function:we basically have to provide the (link) of our (mongodb) database:
  
    //       mongoUrl:'mongodb://127.0.0.1:27017/codeial_development',
    //       autoRemove:'disabled'
    //     },
    //     //create  function: for check that if we have any (error):while connecting the (mongoStore) with the (database):
    //     function(err){
    //       console.log(err || 'connect-mongodb setup ok');
    //     }
    //   )

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


// here we are using the (flash) library of the (npm):
// for showing the (messages) to the (user) on the (webpage):
// we have to use the (flash):after the (session) was called:
// because the (flash) is a specail area of the (session) used for (storing) masseges:
app.use(flash());

// here we are using our owm (middleware):that we have created for the (flash) messages:
// and we gave (setFlash-Function) to our own (middlware):that we have created under (middleware-file):
// under that (function):
app.use(customMware.setFlash);


// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
