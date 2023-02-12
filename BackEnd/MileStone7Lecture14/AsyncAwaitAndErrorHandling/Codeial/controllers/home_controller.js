const Post = require("../models/post");
const User = require("../models/user");

// here we are using the (Async-Await) method on the (home-controller):
// => Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
// => Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

module.exports.home = async function (req, res) {
  // populate the user of each post:

  // here we are converting the (home_controller) code:In the form of (Async+Await) method:

  //   first this (code-query):get executed and stored in this (posts) variable:the (code-) compiler) function does not able to go on  the next (code-query):until this (query) do not get (executed) first:
  //   we are able to that with the help of (Await) function:

  // IMP =  for handling (error) on the (code_queries): in the (Async-Await) method:
  // we can use the (try) and (catch) method:

  try {


    let posts = await Post.find({})
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
      });

    // after that this (code-query):get executed:and stored in this ( users) varaible:

    let users = await User.find({});

    // after all the (queries) get executed:then we have to return the (response) to the (user's) (request):with the help of (data) that we are getting from the (code-queries):

    return res.render("home", {
      title: "codeial | home",
      posts: posts,
      all_users: users,
    });


  } catch (err) {

    console.log('Error',err);
    return;
    
  }



};

// IMP =  here we have simple code for the (home_controller):

// module.exports.home = function (req, res) {
//   // console.log(req.cookies);
//   // res.cookie('user_id', 25);

//   // here we are (Put) all the (post) on the (home-webpage):which were created  by the (user):
//   // for (put) those (posts) on the (webpage):first we have to (get) them from the  (database) with the help of (find) function:

//   // Post.find({},function(err,posts){

//   //     return res.render('home', {
//   //         title: "codeial || Home",
//   //         // here we are giving the (posts):
//   //         posts:posts
//   //     });
//   // })

//   // IMP => if we want all the (details) of the (user) from the  (database):Instead only from its (_ID):who created those (posts):
//   // => we can do that with the help of (two): or we can say its (One) property which has been created with (two)fucntions:
//   // => so the two function are:
//   // 1 = populate:In populate function:we will basically gave the  (user):because we want all the (information) of the (user):who created that  (post):
//   // 2 = exec: and we use (exec) function with the (populate) function: because under the (exec)function:we will write our (call) function: we can say that write the  (function) in  the  (res) of the (req):

//   // here we create another (populate) function:
//   // here we create another (populate) function for the (comments):
//   Post.find({})
//     .populate("user") // here we populate (user):
//     // here we (populate) comments:
//     // for (commets): we need to (populate) two things:
//     // => first is (comment) it self:
//     // => second is (user):who create this (comment):
//     .populate({
//       path: "comments",
//       populate: {
//         path: "user",
//       },
//     })
//     .exec(function (err, posts) {
//       // here we (showing) the (userS):on the (webpage):those were present in our database:
//       // for that first: we have to (get) that (users) from the database:we can do that with the help of (find)  function:

//       User.find({}, function (err, users) {
//         return res.render("home", {
//           title: "codeial | home",
//           posts: posts,
//           all_users: users,
//         });
//       });
//     });
// };

// module.exports.actionName = function(req, res){}

// anther way of (writing) (home-controller) code:with the help of (then):

// post.find({}).polulate('comments').then(function());

// we can also write the (home-controller)code: with the help of (promises):
// 1 = for that first we have to create the code(query) and store it in the (variable):

// let posts = Post.find({}).populate('comments').exec();

// 2 = and after that call the (then) function on the (varibale):were we create the (code-query):

// posts.then();
