// here we import the (post) schema:because for creating controller for the(posts): we need the (schema) of the (post):
const Post = require('../models/post');

// here we create controller for the (posts):

module.exports.create = function(req,res){

  // here we create (post):acc to the (data) we are getting from the (user):with the help of (post-schema):
  // we are getting the (post) data:with the help of (form) tag:
  Post.create({

    content:req.body.content,

    // we also have to gave the(user-OBjectID):
    // who (created) this (post):so that we can (save) this (post) in the  (user's) database:who created this post:
    // or we can say through (ObjectID): we can create the (connection) between the (user) and its (Post):
    // we can say that through this way are able to check that which (user) create the which (Post):
    // we can gave that (user-objectID) with the help of (database)= objectID function:
    // here (_id) define the (user's) database(ObjectID):
    user:req.user._id,

  },function(err,post){

    if(err){
      console.log('error in creating a post');
      return;
    }

    
    return res.redirect('back');

  });
}