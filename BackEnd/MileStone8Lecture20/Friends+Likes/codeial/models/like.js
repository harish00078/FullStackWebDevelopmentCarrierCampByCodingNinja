// here we are creating the schema for the (likes):

// first => we have to import the (mongoose):
const mongoose = require('mongoose');



// second => here we create  schema for the (likes):
const likeSchema  = new mongoose.Schema({

  // first we have to put the (user):to know that which (user) create the which (like):
  user:{
    // we put the (user) in the like  (schema):with the help of its database (objectID):
    // because (objectID) is always unique  for every (user):
    type:mongoose.Schema.objectId,
  },
  // here In (likeable)key:
  // IMP = we store the objectID of the (post) or (Comment) on which that like has been triggered or put:
  likeable:{

    // here we put the (objectID):of that (post) and (comment):
    // so we  know that on which particular (post) or (comment) that (like) has been triggered or put:
    type:mongoose.Schema.objectId,

    require:true,
    
    // here we gave the dynamic reference of the (onModel)property to the (likeable) property:

    // onModel:property basically have the (types) of the (objects) or (Model) on which that (like) has been triggered or put:
    // here In our web app we only have two (models) or (objects) on which that (like) can be triggered or put on:
    // (post) or (Comment):
    refPath:'onModel'

  },
  // here we create the (onModel) property;
  // were we define the type of the (object):on which that (like) has been triggered or put on:
  onModel:{
    type:'String',
    required:true,

    // In general, an enum (short for enumeration) is a special data type that allows a variable to have only a set of predefined values. These values are often represented as string literals or integers, and they provide a convenient way to define a set of constants that can be used in code.

    enum:['Post','Comment']
  }

},{
  // here we are giving the timeStamp property:to the (like) schema:so that we can also track the (time and data) of the (particular) like:
  timestamps:true,
});




//  third => third we convert this (schema) into the (model):so that we can export it or use it in our (index) file:
const Like = mongoose.model('Like', likeSchema);

// here we are exporting it:
module.exports = Like;