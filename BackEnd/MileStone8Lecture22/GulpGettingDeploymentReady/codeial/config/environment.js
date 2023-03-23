// In this file: we basically create both the (environments):
// and all the important files related to that particular environment:will we store in its particular environment that we have created for it:
// IMP = so that we can remove the (load) from the (server):
// V.IMP = and also we can easily track on the important files or things on the (server) we can say:like => (authentication-passwords) of different libraries and etc:

// one of the (environment) is (development-environment):

// here we create a (development) environment:
const development = {
  // and we gave him a name as (development):
  name: "development",

  // like here we store the path of the all the (assets) related to our (application):In the development environment:
  asset_path: "/assets",

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
  google_client_id: "289203943405-pbn6uhs3a6d7ab3f0bsq6ftm8k77vomd.apps.googleusercontent.com",
  google_client_secret: "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",
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",

  // here we are storing the (secret-Key) of the (passport-JWT-strategy): which is related to our (application):In the development environment: 
  jwt_secret: 'codeial',

};

// second (environment) is the (production-environment):
// here we create a (production) environment:
const production = {
  // and we give him a name as (production):
  name: "production",
};

// here we are exporting the (development) environment:
// IMP = so that we can gave the reference of the (development) environment:to the application-files: those we were store in this (environment)file:
module.exports = development;
