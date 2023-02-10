// here we (import) the (schema) of the (comments):so we can create (controller) for the (comments):
const Comment = require("../models/comment");
const Post = require("../models/post");


// here we import the (post) schema:because (before) putting the (comment) on the (particular) post:we have to (check) the (Post-id) of that (comment):
// => so that we (show) the (comment) on the (right) post:

// here we create (controller) for the (comments):
module.exports.create = function (req, res) {
  // here we are First checking or finding the (Post) on the (database): through (FindById) function or method:
  // here req.body.(post) represent the (name) of the (input-tag):that we have created to (get) the (post_id):
  Post.findById(req.body.post, function (err, post) {
    // if we get (that) post:in our (database) on which (user) create the (comment):
    if (post) {
      // then we will create or put that (comment) on the (database): under its (post):
      Comment.create(
        {
          content: req.body.content,
          post: req.body.post,
          user: req.user._id,

          // here we create another (function):In this function be basically try to (update) something for the (first) time:
          // -> were we handle (error):
          // -> or after ceating the (comment): we also have to  (put) that (comment) with in its (post):so that we can have (direct-connection) with the (Comments) of the (particular) post:
        },
        function (err, comment) {
          // here put the (comment):with in its (post):
          // for putting the (comment) in the (post): we are using the (mongodb's) function:named as (comments.push):
          // here we are (updating) our (posts) with the (comments):
          post.comments.push(comment);
          // so after that we also have to (save) that (updation): that  we did on the (posts):
          post.save();

          // after that then we have (redirect) it:
          res.redirect("/");
        }
      );
    }
  });
};

// here we create controller: for deleting (comments):

module.exports.destroy = function (req, res) {
  // first we have to check that (comment) is (present) in the database:
  // we can check the (comments) with the same pattern:that we did for the (posts):

  Comment.findById(req.params.id, function (err, comment) {

    if (comment.user == req.user.id) {

      // here before deleting the (comment): we also had to get its (post-ID):
      // because  we (also) had to (delete):the (comment) refrenence or (comment-ID) from  the (post's) database:
      // then that (Comment) will be get (Completly) deleted:

      // here we are (storing) the (postID) of  the (Comment) in the (variable):so that  we can also (delete) the refrenence of (that) comment:from the (posts) database:

      let postId = comment.post;


      // here we (delete) the  (comment):with the help of (remove) function:
      comment.remove();


      // know we have to (delete) that (comment's):reference from the (Posts) database:
      // we can do that with the help of (findByIdAndUpdate) function: because after (deleting) that( reference): we also have to (update) the (database) of the (posts):
      // and for (deleting) that (reference) or (comment-Id):from that (post):we have to use the ($pull) function of the (mongodb):
      // this ($pull) function:will basically  get the  (comment-id) or (reference) from the (posts) database and (delete) it:

      Post.findByIdAndUpdate(postId, { $pull:{comments: req.params.id}}, function(err,post){

        return res.redirect('back');

      });




    }else{
      return res.redirect('back');
    }




  });






};
