const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path')
// here we are importing the (environment) file:
// so we can gave the (smtp) or we can say (config) path of the nodemailer:that we have stored in the (development) environment:
const env = require('./environment');


// here we are giving the (smtp) or we can say (config) path of the nodemailer:
let transporter = nodemailer.createTransport(env.smtp);


let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err, template){
         if (err){console.log('error in rendering template', err); return}
         
         mailHTML = template;
        }
    )

    return mailHTML;
}


module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}