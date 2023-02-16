const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req, res){
    try{
        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        });
        
        if (req.xhr){
            return res.status(200).json({
                data: {
                    post: post
                },
                message: "Post created!"
            });
        }

        req.flash('success', 'Post published!');
        return res.redirect('back');

    }catch(err){
        req.flash('error', err);
        return res.redirect('back');
    }
  
}


module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post: req.params.id});

            // here we are getting the (ajax) request:for deleting the (post):
            // first we have to check that the (post) that we are getting is actually in the form of (AJAX) request:
            if(req.xhr){

                // for using the (ajax) request (data):
                // first we have to (return) the (status) of the (request):
                return res.status(200).json({

                    // and after that we can (use) the (ajax) request data:
                    // that is in the form of (json):
                    data: {

                        // and here we gave that (post_id) which is (present) in the (ajax) request in the (form) of (json) data:
                        // to the (req.params.id) argument of the (destroy) function:
                        // so that we can delete that (post) from the (database):
                        post_id:req.params.id

                        // and we also have to gave the (message) to the (ajax) request:
                        // so it knows that we have (successfully) deleted the (post):
                    },
                    message: "Post deleted!"

                    
                    
                });
            }



            req.flash('success', 'Post and associated comments deleted!');

            return res.redirect('back');
        }else{
            req.flash('error', 'You cannot delete this post!');
            return res.redirect('back');
        }

    }catch(err){
        req.flash('error', err);
        return res.redirect('back');
    }
    
}