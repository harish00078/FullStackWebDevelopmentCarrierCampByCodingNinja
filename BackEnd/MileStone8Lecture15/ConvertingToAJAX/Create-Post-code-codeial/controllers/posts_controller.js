const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req, res){

    try{
        let post  = await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        // here we have to use that (form) data: that we are getting through the (ajax):
        // for creating a (new-post) object:
        
        // first we have to check that the (data) or the (req):that we are getting in the (form) of (ajax):
        // so the (ajax) request are in the form of (XMLHTTPRequests):the shortform is (XHR):

        // if it is (xhr) request:
        if(req.xhr){

            // then In (response) we have to return the the (json-data):which will have the (data) of the (post):

            // we can gave the (json-data):with the help of  (status) of the response:
            // means:if (status == 200):then it means it is (xhr) request:or we can say (ajax) request:
            return res.status(200).json({


                // here we gave that (form-data) in the form of  (json) to the (post) varaiable:
                // IMP = were we are creating the (post):using that (json-data):

                data:{

                    // here we gave the form-data to the (post) varaiable:
                    // through which are creating the (post):

                    post: post
                },
                // here ajax (req):will gets the (message) with it: to know that the (post) has been created: or not:
                // or we can say that  (ajax) resquest has been (successfully) executed or not:
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