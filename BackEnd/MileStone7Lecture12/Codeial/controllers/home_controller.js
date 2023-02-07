// here we (import) the (post) schema:
const Post = require('../models/post');


module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // here we are (Put) all the (post) on the (home-webpage):which were created  by the (user):
    // for (put) those (posts) on the (webpage):first we have to (get) them from the  (database):
    Post.find({},function(err,posts){

        return res.render('home', {
            title: "codeial || Home",
            posts:posts
        });
    })




}

// module.exports.actionName = function(req, res){}