// here we create (post) file:through this file:we will basically (posts) the (things) on the (webpage):
// and here we also learn about that how can we store (posts) on the (database):with the (help) of relations:

// here we create (schema) for the (post) function:

// for that first we need (mongoose):
// here we import (mongoose):

const mongoose = require('mongoose');

// here we create (schema) for the (post) function of the (webpage):

const postSchema = new mongoose.Schema({

  // first post schema will have (content) field or we can say object:
  content:{
    type:String,
    required:true

  },
  // second it should have the (connection) with the (log-in) user:who created that (post):

  // because we have to (save) that (post) in that (user's) database:so that (post) is only (access) by the (user):who created it:

  // IMP = and we can say that (post):should be (Connected) with its (user):
  user:{

    // here we gave him a (type) is (reference):
    // so we can  (connect) the (user) through (reference):  
    // we can gave the (user-reference) with the help of  (database-obectID) function:we can gave the (user-objectID) to the (Post):so we know that which (user) create the which (post):

    // we only able to do that if we have (objectId) in the (database):and we only have (obectID) in the database:if (user) is successfully able to (sign-up) in the (website):

    // and we have to gave that (user_id) to the (post): so that (user) can have (connection) with its (post):
    // and also those (posts) should only (seen) by the (user):who created them:

    type:mongoose.Schema.Types.ObjectId,

    // here we gave him the (reference) of the  (User-schema):from were we get the (objectID) of the (user):
    ref:'User'

  },


  // here we are (putting): all the (id's) of the (comments):so that we can have (direct) connection between the (posts) with there (comments): 
  //=> or so we can get the (commnets) frequently of the (particular) post:In this way we can (directly) get all the (commments) of the (particular) post:
  //=> we did not have to go on the (comment) section or schema:for getting the (comments) of the (particular) (post):
  //=> we (store) all the comment (id's): under the (array):we will basically create array of comment (id's) object:
  comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Comment'

    }
  ]





// here use (time-stamp) function of the (database):so we can track on the  (data) and (time) of  the particular (post):
},{

  timestamps:true

});




// after that we have to convert  this (schema) into the (model):
const Post = mongoose.model('Post',postSchema);


// and then we have to export this schema so we can use it with our (server)file:
module.exports = Post;
