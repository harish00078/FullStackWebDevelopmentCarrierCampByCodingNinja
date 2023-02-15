const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req, res){

    try{
        let posts  = await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        // here we have to use that (form) data: that we are getting through the (ajax):
        // for creating a (new-post) object:
        
        // first we have to check that the (data) or the (req):that we are getting in the (form) of (ajax):
        // so the (ajax) request are in the form of (XMLHTTPRequests):the shortform is (XHR):

        if(req.xhr){

            // then we simple have to return the (response):with the (status) of code:
            return res.status(200).json({

                // IMP = and we also have to return the response of (post-form's-data):
                // that we are getting in the form of (json) through the (ajax) request:
                // through which we are create our (posts)

                data:{

                    // here we gave the (json's) post-form's-data to the (posts) varaiable:
                    // through which are creating the (posts):

                    post: posts
                },
                // here ajax (req):will gets the (message) with it: to know that the (post) has been created: or not:
                message: 'Post created!'

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