// here we are creating the controller for the (likes):

// for creating (likes_controller):we need three (model's) or we can say (schema's):

// first we import the  (like) model:
const Like = require('../models/like');

// second we import the (Post) model:
const Post  = require('../models/post');

// third we import the (Comment) model:
const Comment = require('../models/comment');



// after that here we create the (controller) for the (likes):
// we named this like_controller as (toggleLike):

module.exports.toggleLike = async function(req,res){

  try{

    // this is the (urL) for the (like's):(likes/toggle/?id=abcdef & type=Post or Comment):

    // here we are adding the (likeable) property of the (like) schema:
    //  through  which we are adding the (postID) or (commentID) in the (like) schema:to know that from which (object) this (like) belongs:
    let likeable;

    // here we create boolean variable (deleted): and by default its value is  (false):
    // we do this because of our code logic:
    // IMP => means:if we already have  (liked) on that particular object:
    // then we will delete that (like):which will (user) again try to (like) that (post) or (comment):
    // if it not (liked) yet that particular object: then we will add the (like) on that particular object:

    //  IMP => how does this (deleted) work:
    // if we have (false):then it means we did not (liked) that (object) yet:
    // we will check that with the help of (like) count on that object:if it (zero) then it means we did not (liked) that (object) yet:
    // then we will add the (one) like in that object:
    // we will add the (like):with the  help of (+1):




    // but if we have (true):then it means we have already (liked) that (object):
    // we can check that with the help of (like) count on that object:if is (greater) than (zero) then it means we have already (liked) that (object):means if its (one):with that same (userID):
    // then we will delete that (like) request of the (user):
    // we will delete the (like):with help of (-1):
    let deleted = false;



    // here we use the (likeable) property:

    // here we first check the type of the  (like):
    // if (user) try to (like) the  post:
    if(req.query.type == "Post"){


      // frist => we will check that (like) is already present in the (post) schema or not:
      // we can do that with the help of (likes) property of the (post) schema:which will have (id's) of the already present (like's):

      //  because if its (already) present in it :then we have to delete the (like) request of the  (user):
      // IMP = if its not (present):then we will add that (like) on that (post) and also add its (likeID) on the (post) schema:
      
      // and after we also have to add that (postID) in the (likeable) property  of the (like) schema:which will have (id's) of all the already (liked)  (object's):

       // we are also (populating) all the (likes) of this (post):to which (user) try to  (like): with the help of (likes) property of the (post) schema:

       //so that we can show its count on the (webpage):


      likeable = await Post.findById(req.query.id).populate('likes');



      // In else:if (user) try to (like) the (comment):
    }else{

      // same thing:we did with the (comments):


      // first => we will check that the (like) or  (like)ID is already present in  the (comment) schema or not:to know that this (comment) is not (liked) already or not:
      // we can find the (LikeID) with the help of the (likes) property of the (comment) schema:which will have (id's) of the already present (like's):

      // because if its (already) present in it :then we have to delete the (like) request of the  (user):

      // IMP = if its not (present):then we will add that (like) on that (comment) and also add its (likeID) on the (comment) schema:
      
      // and after we also have to add that (postID) in the (likeable) property  of the (like) schema:which will have (id's) of all the already (liked)  (object's):


       // we are also (populating) all the (likes) of this (comment):to which (user) try to  (like):with the help of (likes) property of the (comment) schema:
       // so that we can show its count on the (webpage):

       likeable = await Comment.findById(req.query.id).populate('likes');

    }



    // here we are checking that:if the  (like) is already exists or not:






  }catch(err){

    // if we have (error):
    // then we have to return the (response) in the form of (json)format:because we are using the (AJAX) request method for the  (like's):
    console.log(err);

    // json:have two things in it:
    // one is the (request) status code:
    // second is the (response) forthe (user's) request:In the (message) key:
    return res.json(500,{

      message:'Internal Server Error',
    });


  }


}

