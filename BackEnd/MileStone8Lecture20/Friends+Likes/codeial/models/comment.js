const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // comment belongs to a user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    // here we are connecting (like's) with there  (comment's):
    // basically we are connecting  the (like's):with there particular (post):
    // the same way we did with the (comments):so that every comment can be connected with its (post):

    // IMP = include the array of ids: of all (Like's) in this post schema itself:
    likes: [
      {
        // here we are putting the (objectID) of the (like's):
        type: mongoose.Schema.Types.ObjectId,
        // here we are connecting it with the (Like) schema or (model):that we have created:through which we are getting the (objectID's) of the (like's):
        // here we are basically connecting the (post)schema with the (like's) schema or model:with the help of (dynamic-reference):
        // because we are not importing the (like) schema or model:that's why we are using the(dynamic-reference):
        ref: "Like",
      },

      
    ],


  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
