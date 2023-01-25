// here we create (schema) for the user's (Identity-Authentication):
// or we can say (schema) for  the (user):

// 1 = for creating (schema): first we need Import (mongoose):
const mongoose = require('mongoose');


// 2 = and then secondly we create (schema):

const userSchema = new mongoose.Schema({

  // first we need (email) from user:
  // so here we create a (object):and named it  as (email):
  email:{
    
    // here we gave some (properties): to the (email) object:
    // => it should we (string) datatype:
    type:String,
    // => another we gave  a (condition): it complusory to gave (email):
    required: true,
    // => it should we (unique):
    unique: true
  },

  // second we need (password) from user:
  // so here we create (password) object:
  password:{
    
    type:String,
    required:true
  },

  // third we need (name) from the user: or we can say (name) of the user:
  // so here we create (name) object for that:
  name:{
    type:String,
    required:true
  }

},{
  // we learn about time-stamps in (mysqL) database:
  // that this function is used: when we get the (detailed-value) of  (time and date) of the (particular) entry:
  // timestamps:Working of the timestamp in mongodb is simple, where when executed, the timestamp method will call the currentDate (), which will pick the current date and time of the system. This picked date and time will be stored in the collection, along with the other data values.

  // IMP => here we are using it with (user-Identity) creating (schema) so we can (check):that when our (user) is created or (updated):
  timestamps:true
});



// 3 = here we create (model): and connect that (model) with the (schema) that we have created:
// and name of that (model) is (User):
const  User = mongoose.model('User', userSchema); 


// 4 = after that we have to export this (model): so we can use it in our (server-file):
module.exports = User;