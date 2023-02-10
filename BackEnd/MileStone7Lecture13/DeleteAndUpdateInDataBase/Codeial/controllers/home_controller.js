// here we (import) the (post) schema:
const { populate } = require("../models/comment");
const Post = require("../models/post");

// here we are importing the (user) database or schema :so that we can (show) the (userS) on the (webpage):
const User = require('../models/user');

module.exports.home = function (req, res) {
  // console.log(req.cookies);
  // res.cookie('user_id', 25);

  // here we are (Put) all the (post) on the (home-webpage):which were created  by the (user):
  // for (put) those (posts) on the (webpage):first we have to (get) them from the  (database) with the help of (find) function:

  // Post.find({},function(err,posts){

  //     return res.render('home', {
  //         title: "codeial || Home",
  //         // here we are giving the (posts):
  //         posts:posts
  //     });
  // })

  // IMP => if we want all the (details) of the (user) from the  (database):Instead only from its (_ID):who created those (posts):
  // => we can do that with the help of (two): or we can say its (One) property which has been created with (two)fucntions:
  // => so the two function are:
  // 1 = populate:In populate function:we will basically gave the  (user):because we want all the (information) of the (user):who created that  (post):
  // 2 = exec: and we use (exec) function with the (populate) function: because under the (exec)function:we will write our (call) function: we can say that write the  (function) in  the  (res) of the (req):

  // here we create another (populate) function:
  // here we create another (populate) function for the (comments):
  Post.find({})
    .populate("user") // here we populate (user):
    // here we (populate) comments:
    // for (commets): we need to (populate) two things:
    // => first is (comment) it self:
    // => second is (user):who create this (comment):
    .populate({      
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function (err, posts) {

      // here we (showing) the (userS):on the (webpage):those were present in our database:
      // for that first: we have to (get) that (users) from the database:we can do that with the help of (find)  function:

      User.find({}, function(err,users){

        return res.render("home", {
          title: "codeial | home",
          posts: posts,
          all_users:users
        });


      })




    });
};

// module.exports.actionName = function(req, res){}
