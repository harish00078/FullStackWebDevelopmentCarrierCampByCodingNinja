// here we create Schema for the (Comments):

// first we import mongoose:for creating schema:
const mongoose = require('mongoose');


// secondly we create schema:
const commentSchema = new mongoose.Schema({

  // under (Comment) first object:we have is (content):
  content:{
    type:String,
    required: true
  },

  // second:we have (user):to know that which (user) made this (comment):
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },



  // third:we also need to know about that which (Post) this comment is(related) to:
  post: {
    type:mongoose.Schema.Types.ObjectId,
    // refer to (Post) schema:because we want the (objectID) of the  (post):to know that which (Post) this (comment) is related to:
    ref:'Post'
  }




},{
  timestamps:true
});


// third:we have to put or connect:this schema with the (model):so that we can use (schema) in our (server-file):
const Comment = mongoose.model('Comment',commentSchema);


// fourth:we have to (export):this (model) so we can use it in our (server) file:

module.exports = Comment;