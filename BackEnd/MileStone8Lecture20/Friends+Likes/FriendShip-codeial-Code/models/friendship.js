// here we are creating the schema for the (friendShip):

// for that first we have to import (mongoose):

const mongoose = require('mongoose');

// and after that we can create the schema for the (friendShip):with the help of mongoose:

const friendshipSchema = new mongoose.Schema({

  // here we have (user):who send the (request):
  from_user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },

  // here we have (user):who accepted this (request):the naming is just to understand, otherwise,the user wont see a difference:
  to_user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },

},{
  timestamps:true,
});


// here we are converting that (schema) into the (model):
const Friendship =  mongoose.model('Friendship',friendshipSchema);

// after that we have to export that (model):so we can use that (schema) In the (other) files:
module.exports = Friendship;