// here we (import) the (schema) of the (comments):so we can create (controller) for the (comments):
const Comment = require('../models/comment');
const Post = require('../models/post');

// here we import the (post) schema:because (before) putting the (comment) on the (particular) post:we have to (check) the (Post-id) of that (comment):
// => so that we (show) the (comment) on the (right) post:

// here we create (controller) for the (comments):
module.exports.create = function(req,res){

  // here we are First checking or finding the (Post) on the (database): through (FindById) function or method:
  // here req.body.(post) represent the (name) of the (input-tag):that we have created to (get) the (post_id):
  Post.findById(req.body.post, function(err,post){

    // if we get (that) post:in our (database) on which (user) create the (comment):
    if(post){

      // then we will create or put that (comment) on the (database): under its (post):
      Comment.create({

        content:req.body.content,
        post:req.body.post,
        user: req.user._id

        // here we create another (function):In this function be basically try to (update) something for the (first) time:
        // -> were we handle (error):
        // -> or after ceating the (comment): we also have to  (put) that (comment) with in its (post):so that we can have (direct-connection) with the (Comments) of the (particular) post:
      }, function(err,comment){




        // here put the (comment):with in its (post):
        // for putting the (comment) in the (post): we are using the (mongodb's) function:named as (comments.push):
        // here we are (updating) our (posts) with the (comments):
        post.comments.push(comment);
        // so after that we also have to (save) that (updation): that  we did on the (posts):
        post.save();

        // after that then we have (redirect) it:
        res.redirect('/');
    

      });

    }


  });

}