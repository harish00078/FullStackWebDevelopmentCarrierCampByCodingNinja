// In this file: we basically create both the (environments):
// and all the important files related to that particular environment:will we store in its particular environment that we have created for it:
// IMP = so that we can remove the (load) from the (server):
// V.IMP = and also we can easily track on the important files or things on the (server) we can say:like => (authentication-passwords) of different libraries and etc:

// here we import (fs) or we can (file-system) for the (morgan):
// because we are using the (morgan):we can say setup the (morgan):with the help of the (files):that why we have to import the (fs):
const fs = require('fs');

// here we import the (rotating-file-stream) library:through which we can basically delete the (older) logs from the (file) or we can say (put) them into the (anoother-file): so that new ones can (stored) in that file:it is basically used to reduce the (log) storage load from the (system):
const rfs = require('rotating-file-stream');

// here we are importing the (path) library:through which we can gave the (file) path to the (rotating-file-stream') library:to tell that In which (file) we have to store the (logs):
const path = require('path');






// => here we create variable (logDirectory):which will have the (path) of the (folder):In which we want to store the (logs):
const logDirectory = path.join(__dirname,'../production_logs');

// we have to check that if the (logDirectory) is already exits:
// if its not (exits):then we have to create the new one:

// for checking (logDirectory) already exit in the (filesystem):we have to use the (existsSync) function: 
// if its not (exits):then we have to create the new once:for that we can use the (mkdirSync) function of the (fs) library:
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);


// after that we have to create the (rotate-file-stream) function:
// through which we are handling the (logs) file system:or we can storing the (log):
// and also deleting the older onces:so that system doesn't get storage(overloaded) problems:

// here (access.log) is basically the (file) name:that we have given to the (logs) file:
// for creating (rotate-file-stream) function:
// we have to use the (createStream) function of the  (rotate-file-stream) library :
const accessLogStream = rfs.createStream('access.log',{

  // under this function:we have to define all the things: those were related to the (logs) file:

  // first we define (rotation) of the (logs) file:we gave the (one) day interval time:
  interval:'1d',

  // second we gave the (path) of the (directory) or (folder):were we want to store the (logs):
  path:logDirectory,

});





// one of the (environment) is (development-environment):

// here we create a (development) environment:
const development = {
  // and we gave him a name as (development):
  name: "development",

  // like here we store the path of  all the (assets) related to our (application):In the development environment:
  asset_path: "./assets",

  // here we are storing the (secret) (session_cookie) key that is related to our (application): In the development environment:
  session_cookie_key: "blahsomething",

  // here we are storing the (name) of our (database) that is related to our (application): In the development environment:
  db: "codeial_development",

  // here we are storing the (smtp) object or we can say (config) of the (nodemailer) that is related to our (application): In the development environment:
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    auth: {
      user: "hk313665@gmail.com",
      pass: "macgnpblfzjssxnw",
    },
  },

  // here we are storing the (passport) google-authentication (strategy): which is related to our (application):In the development environment:
  google_client_id:
    "289203943405-pbn6uhs3a6d7ab3f0bsq6ftm8k77vomd.apps.googleusercontent.com",
  google_client_secret: "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",
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",

  // here we are storing the (secret-Key) of the (passport-JWT-strategy): which is related to our (application):In the development environment:
  jwt_secret: "codeial",

  // here we are giving the (logs) to the (development) environment of the (application):
  // with the help of the (morgan) library:
  morgan:{

    // under morgan we have to define the two things:
    // => one is the (mode) of the application (environment):
    mode:'dev',

    // => second we have to define the (options):
    // In options we will the define  the (rotate-file-stream) function:through which we are handling our (logs) or we can handling the (storage) or  (file-system) of the (logs):
    options:{stream: accessLogStream}


  }


};

// second (environment) is the (production-environment):
// here we create a (production) environment:

const production = {

  // and we give him a name as (production):

  name: "production",

  // IMP = In production environment:we did not directly gave  or share the (secure) things of our application  (directly) to the (production) environment:
  // because we did not want anyone to  have access on those things:
  // because those things may be related to my company or my company's customer details:
  // and also with the help of that they may do bad things with my application:
  // IMP = that's why we store all the important or secure information related to the application:In the system:
  // and we only gave the reference of those important or secure informations to the (production) environment from the system:so  that no one will able have access on those things:

  // like here we gave the path of  all the (assets) related to our (application) from the (environment-varaibles):In the production environment:
  // for accessing the environment variables:we have to use the (process.env.variable_name):


  asset_path: process.env.CODEIAL_ASSET_PATH,


  session_cookie_key:process.env.CODEIAL_SESSION_COOKIE_KEY,

  db: process.env.CODEIAL_DB,

  // here we are storing the (smtp) object or we can say (config) of the (nodemailer) that is related to our (application): In the development environment:

  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    auth: {
      user: process.env.CODEIAL_GMAIL_USERNAME,
      pass: process.env.CODEIAL_GMAIL_PASSWORD,
    },
  },

  // here we are storing the (passport) google-authentication (strategy): which is related to our (application):In the production environment:
  google_client_id:process.env.CODEIAL_GOOGLE_CLIENT_ID,
  google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,

  // here we are changing the (localhost) or its (port) number into the (website) name with (.com):
  // because we use it as (domain) name:In production of our application:

  google_call_back_url:process.env.CODEIAL_GOOGLE_CALLBACK_URL ,

  // like here we gave the path of  (jwt_secret) key related to our (application) from the (environment-varaibles):In the production environment:
  // for accessing the environment variables:we have to use the (process.env.variable_name):

  jwt_secret:process.env.CODEIAL_JWT_SECRET,


  // here we are giving the (logs) to the (production) environment of the (application):
  // with the help of the (morgan) library:
  morgan:{

    // under morgan we have to define the two things:
    // => one is the (mode) of the application (environment):
    // here In production environment: we have write the mode (combined):because our (development) environment (server) is also running under the (production) environment:
    mode:'combined',

    // => second we have to define the (options):
    // In options we will the define  the (rotate-file-stream) function:through which we are handling our (logs) or we can handling the (storage) or  (file-system) of the (logs):
    options:{stream: accessLogStream}


  }


};

// here we are exporting the (development) environment:
// IMP = so that we can gave the reference of the (development) environment:to the application-files: those we were store in this (environment)file:

// here we have to gave the (environment) to the application:acc to the (prefrence) of the (application):
// or we can say acc to the (preference) of the (user's) using application:
// so we only have to export that (environment): which is (asked) by the (application) system:
// for that we have to use the (eval) function:which will check the (environment) preferences of the  (application):and it will only gave that (environment) to the application:


// HERE WE did that :if (environment) is not define then we will gave the (development) environment to the (application) system:if its define then we will only give that (environment) to the (application) system:which is defined by application:

module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? 'development'  :  eval(process.env.CODEIAL_ENVIRONMENT);
