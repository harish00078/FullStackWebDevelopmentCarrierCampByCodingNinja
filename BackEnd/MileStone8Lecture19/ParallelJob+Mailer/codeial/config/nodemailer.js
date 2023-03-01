// here we are setting up or using the (nodemailer) module:
// through which we can connect with the (mail-server)API:which will help us to sending emails to the (User):

// first we have to import the (nodemailer) module:
const nodemailer = require('nodemailer');

// here we import the (ejs):because we are creating the (template) for the (email) through (ejs):
const ejs = require('ejs');

// here we import the (path) module:through which we provide the (email)template code to the (ejs):
const path = require('path');




// second we have to create the transporter object:
// In which we define all the things:that through which we are sending the (emails) to the (user):
// or we can say that setting up the (connection) between the (two) servers or machines:
// through  which they can communicate with each other:
// create reusable transporter object using the default SMTP transport:

let transporter  = nodemailer.createTransport({

  // here we first define (serivce):that through this service we are sending our (emails):
  service:'gmail',

  // after that we have to define the (host) of  that (serive):or we can say that the (API) which were giving those services:
  host:'smtp.gmail.com',

  // (587) is the very secure protocal for communicating with two different servers or devices through the network:(587) port is basically the (TLS) protocol:
  // TLS => Transport Layer Security (TLS) is a cryptographic protocol designed to provide communications security over a computer network.
  port:587,

  // basically use to tell that we want to secure our (port) or not:
  secure: false,// true for 465, false for other ports:

  // In  authentication: we have to define the (gmail) identity:through which  we are sending the (mails) to the (user):
  // we also have to define the (gmail) identity:so that (gmail) (API-server) can track on us:
  // and check that we are the (real-user) or not:
  // for example:like we are not spaming the other (users):
  auth:{
    user:'hk313665@gmail.com',
    pass:'BOSS009bond'
  }


});




// third we have to create the (Templates) for the (emails):which also has the  (user) data in it:
// like what will the structure should look like of this particular kind of (email):that we are sending to the (user):
// here we create the function for that with the help of (arrow) method:

let renderTemplate = (data,relativePath) =>{

  // relativePath = is basically the (path) through which we are sending the (email):

  // here we are creating the template for the (email) through (html):
  // or we can say here we are creating variable:which will have the (html-code)reference of the created (email-template) with the (user) data in it:
  let mailHTML;

  // here we are using the (ejs):
  // because: we have to use the (renderFile) method of the (ejs):
  // so that we can render our (ejs-mailer-template) file code into the (html)code:so that browser can understand that (code):
  ejs.renderFile(

    // here we connect the (ejs) with the (folder-path):were we have our all the (email) templates or we can say those template's (code):
    // which ejs has to render:
    // because they we are in the form of (ejs):

    // relativePath is basically the (path) through which this (function) has been called:or we can say through which the (email) has been send:
    path.join(__dirname,'../views/mailers',relativePath),

    // here we are passing the (data):to the (email-templates):
    // which will have the (data) of the (user):to show that (data) on the (email-templates)or we can say on the (email):
    data,

    // and after all of that we have to create the (callback) function:
    function(err,template){

      // template = here template is basically the (structure) of the (email):which also has a (user) data in it:

      // if we have (err):while rendering the (ejs) template file:
      if(err){

        console.log('error in rendering template',err);

        return;
        
      }
      
      // if there is no (error):then we have to return the (template) or (email):
      // that we have created with the help of (email-templates) and also with the (user) data:
      // and here we connect that (template) with the (mailHTML) variable:
      // so that we can return that created (template) to the (user):
      mailHTML = template;
    }


  )


  // here we are returning that (template) or we can say (email):to the (user):
  return mailHTML;


}


// after that we have to (export) this (nodemailer) configuration:
// here we have to export the (two) things:because in this file we have created two functions:
module.exports = {
  // one is (transporter):
  transporter:transporter,
  // and the other is (renderTemplate):
  renderTemplate:renderTemplate
}



