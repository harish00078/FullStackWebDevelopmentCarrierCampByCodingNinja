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

    // => (1) =  here we are creating the (like) on the (object):

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
      
      // and after that we also have to add that (postID) in the (likeable) property  of the (like) schema:which will have (id's) of all the already (liked)  (object's):

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



     // => (2) =  here we are checking that the  (like) is already present in  the (object) or not:
    
    // here we are checking that:if the  (like) is already exists or not:
    // we use (findOne) function:because we  only had to find out the (one) like or current (like) at one time:
    let existingLike = await Like.findOne({

      // here we are checking that:the (like) is already present in the (likeable) property of the (Like) schema:
      // because that property will have all the objects(id's):which were already (liked) by this particular (user):who try to again (like) that (object):

      // IMP = because:if the  (object) is already (liked) by the (user):then that (object) will have its (likeID) stored in its (schema):
      likeable:req.query.id,

      // we also had to check the (type) of the (object):that it match with the (object-type) as well:
      onModel:req.query.type,

      // we also put the (user) or check the (user):the  (user) who try to like the  (object) is the same (user):who already (liked) this (object) or not:
      user:req.user._id,




    })


    //  here we are deteting the (like):if its already present in the (object):
    // its present:means its already (liked) by the (user):then we have to (delete) the (like) request  of the (user):for the particular (object):

    // if a like already exits then delete the (like) request of the (user):
    // or we can say we have to (delete) that (like):from the (object):
    if(existingLike){

      // first we delete the (likeID) from the (object):
      // so for (deleting) the (like) from the (object):
      // we have to use the (pull) function:because In (objects) we are using the (object-array) for storing those (likeID's) in the (object):
      // so for deleting some things in that we have to use the (pull) function:
      likeable.likes.pull(existingLike._id);

      // after deleting that (like) from the (object):we also have to save that (Likeable) property:
      likeable.save();

      // and then we also have to delete that (like) request:that we are getting from the (user):
      existingLike.remove();

      // here we are changing the (default) value of the (delete) variable:
        // but if we have (true):then it means we have already (liked) that (object):
      deleted = true;





      // if its not exist:then we have to create that (like) on that (object):on which (user) try to create that (like):or we can say (put) that (like):
    }else{

      let newLike = await Like.create({

        // for creating like:we need three things:

        // one  is the (user):who trying to (like):
        user:req.user._id,
        // second is on (object)or we can say on which (post or comment):they try to (like):
        likeable:req.user.id,
        
        // third is the type of the (object):
        onModel:req.query.type,


      });

      // after creating the (like):we also have to store that (likeID) in the (object) schema as well:
      // for that we have to use the (push) function:because In that(object) schema we are storing those (likeIDs) in the (array of OBject):
      likeable.likes.push(newLike._id);
      
      // after putting it in the (object) schema:we also have to (save) it:
      likeable.save();




    }


    // after  all that know:we have to return the  (response) to the (user) request:
    // we have to return in the form of (json):because we are creating (request) in the form of (AJAX):

    return res.json(200,{

      message:'request successful',
      // here we are also returning the (data) of the (delete) variable:
      data:{
        deleted:deleted,
      }

    })





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

