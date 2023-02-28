// here we are creating functions of the (mailers):
// like which mail should be send to the (user): for this particular of action  on the webpage:

// here we are creating the (mailer) function for the (comments) actions of the (user):
// that we are getting in the (webpage) through the (user):

// first we have to import the (nodemailer) configuration:that we have created:
// because we need that for creating (mailer) functions:
const nodeMailer = require("../config/nodemailer");

// here we create the (mailer) or (mail) function for the (new-comment) action of the (user) on the (webpage):
// we can also (exports):the created (function) directly:
// we are creating the function:with the help of (arrow) functions:
exports.newComment = (comment) => {
  console.log("inside  newComment mailer",comment);

  // here we are sending the (mail) to the (user):
  // who had created that comment:
  // heree we are using the (nodeMailer) that we have (configure) in our (system):for sending the (email):

  // here we use the (nodemailer's) transporter function:that we have created for sending the (mails) to the (user):
  // and we also have to use the (sendMail) inbuild-function of the (nodemailer):
  // through which we can tell that from where we have to send this (mail) or what kind of (mail) it should be:
  // and  other is that we have to send this (maiL):
  nodeMailer.transporter.sendMail(
    {
      // In (from):we  tell the (user) that we are sending this (mail):
      // or we can say this (mail) is from the (website): on which you have commented:
      // (from) is basically the (sender address):
      from: "harishpathania150@gmail.com",
      // In (to):we tell that to which (user): we have sent this (mail):
      // and here we tell that the (user):who commented on the (website):
      // (To) is basically the (list of receivers)
      to: comment.user.email,
      // In (subject):we have to tell that:what kind of (mail) is it:or we can say but is the purpose of this (mail):

      subject: "new comment published!",
      // after that we have to provide the (body) to this (mail):
      // we can do that with the help of (html):
      html: "<h1>yup, your comment is now published </h1>",

      // and here we create the callback function::with the help of (arrow) function:
      // info = info argument basically have the information about the (req)that has been send to the (mail) server:for sending the (mail) to the (user):
      // that we have created:
    },

    (err, info) => {


      // if we have (error):in sending (maiL) to the (user):
      if (err) {
        console.log('Error in sending mail',err);
        return;
      }

      // if we did not have the (error) in sending (maiL) to the (user):
      console.log('Message sent',info);
      return;

    }




  );



};
