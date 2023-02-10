// here we import the (post) schema:because for creating controller for the(posts): we need the (schema) of the (post):
const Post = require('../models/post');

// here we Import the (comments):because when we (remove) or (delete) the particular (post):then its (comments): also should get (deleted) automatically:
const Comment = require('../models/comment');




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






// here we are creating (controller) for deleting (posts):
module.exports.destroy = function(req,res){

  // first we have to check the (post) in the datbase:that we are trying to delete:from the (webpage):
  // we are finding the (post) in the database:through (id) of the (post): for that we have to use the (findById) function:
  Post.findById(req.params.id, function(err,post){

    // here we are doing that: if we get the (post) in the database:then before deleting that (post):we also have to check that the (user) who is deleting the (Post) is the (user): who created that (post):
    // means we have to (put) the (authentication):here so the same (user) is able to (delete) the (post):who created that (post):

    // for that we have to use the (mongodb) function:(.id) function basically convert the (user-id) into the (form)  of (string):so we can easily check the (user)  of the (post):or the (user) who try to gave the (delete) (req) are  the both same or not:
    if(post.user == req.user.id){

      // then we simply have to remove that (Post):with the help of  (remove) function:
      post.remove();

      // because after deteling the (post):we also have to (delete) its (comments) automatically:
      // for (deleting) the(comments): we  can use the function named as(deleteMany):
      Comment.deleteMany({

        // here we are giving the (post) with its (id): to tell the function  that  which (post's) (comments) we have to (delete):
        post:req.params.id

      },function(err){

        return res.redirect('back');
        
      });


    }else{

      return res.redirect('back');

    }

  });

}