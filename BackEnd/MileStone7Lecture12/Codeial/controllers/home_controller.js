// here we (import) the (post) schema:
const Post = require('../models/post');


module.exports.home = function(req, res){
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
    Post.find({}).populate('user').exec(function(err,posts){
        
        return res.render('home',{
            title:"codeial | home",
            posts: posts 
        });

    })




}

// module.exports.actionName = function(req, res){}