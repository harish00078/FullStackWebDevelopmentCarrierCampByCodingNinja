const express = require('express');

// here we are Importing our  environment-file:
// In this environment-file:we have created our both the environments:
const env = require('./config/environment');

// here we are importing the (Morgan):through which we can create or we can say run our (log) system of the application:
const logger = require('morgan');

const cookieParser = require('cookie-parser');
const app = express();

// here we are importing the (helper) function of the (views):that we have created:
// we also have to pass our (app) as argument to this function:
require('./config/view-helpers')(app);

const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');

const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');

// setup the chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is listening on port 5000');

// here we import the (path) library:
// so that we can simply provide the different (file-path's) to our (server) application: from the different folders or files we can say:
const path = require('path');

// here we gave (static-files) or we can say  (assets-files) to our application (server):with the help of the (environment):that we have created for the (development): 

// here we put the check for the (sassmiddleware):
// if the (mode) is (development):then it should run continously:
// but if we are on the (production-mode):then (sassmiddleware) should only run for once:

if(env.name == 'development'){

    app.use(sassMiddleware({

        // here we are giving the reference of the (different) files and folders:with the help of  the (path) library:
        // (path.join) = Join all arguments together and normalize the resulting path.
    
        src: path.join(__dirname,env.asset_path,'scss'),
    
        dest: path.join(__dirname,env.asset_path,'css'),
    
        debug: true,
    
        outputStyle: 'extended',
    
        prefix: '/css'
    
    }));

}



app.use(express.urlencoded());

app.use(cookieParser());

// here we gave (static-files) or we can say  (assets-files) to our application (server):with the help of the (environment):that we have created for the (development): 
app.use(express.static(env.asset_path));
// make the uploads path available to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));

// here we gave (logger) function to our (application):through which our (application) will get the (logs):
// under (logger) function:we have to define the two things:
// => first is the (mode) of the (application) environment:that we have given to the (morgan) library:acc to our (application) environment:
// => second is the morgan library (options):In which we have gave the (path) of the (directory) were we have stored those (logs):
app.use(logger(env.morgan.mode, env.morgan.options));




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
    // here we are giving the (path) of the secret (session_cookie) to our application:from the (environment.js) file:were we have stored our session_cookie:
    secret: env.session_cookie_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongoUrl:'mongodb://127.0.0.1:27017/codeial_development', 
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
