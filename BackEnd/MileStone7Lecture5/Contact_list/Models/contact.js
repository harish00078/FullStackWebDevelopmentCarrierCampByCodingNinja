// here we are importing the (mongoose): because we create (schema) through (mongoose):
// Schema = is basically a (structure) or (model) of our (database):

const mongoose = require('mongoose');

// here we are creating a schema:

const contactSchema =  new mongoose.Schema({

  name:{
    type: String,
    required:true
  },

  phone:{
    type: String,
    required:true
  }

});



// after that we have to connect this (schema) with the database (collections):
// To define that which one of the database (collection) will use this (schema):
// => for that first we have to (convert/connect) or we can say (compile) our schema into the (model):
// because we did not directly use the (schema) in our (server) file:
// we basically use the (model) in our (server-file):as we know about (MVC):
// here we are connecting our model named as (Contact):  with the (schema) that we have created through (mongoose):
// IMP = always use first letter as capital-letter in your (model-name): 
const Contact = mongoose.model('Contact', contactSchema);


// and here we are exporting our (model): so we can use it in our (server-file):
module.exports = Contact;