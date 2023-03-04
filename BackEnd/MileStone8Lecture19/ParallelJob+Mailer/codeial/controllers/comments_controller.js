const Comment = require('../models/comment');
const Post = require('../models/post');

// here we are importing the (mailer) function:that we have created for the (comments):
const commentsMailer = require('../mailers/comments_mailer');

// here we are importing the (Kue):and we named it as (queue):which under that (kue):we have created the (queue):
const queue = require('../config/Kue');

//  here we import the comment-email-worker that we have created in this file that we have imported::
const commentEmailWorker = require('../Workers/comment_email_worker');

module.exports.create = async function(req, res){

    try{
        let post = await Post.findById(req.body.post);

        if (post){
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });

            post.comments.push(comment);
            post.save();

            // here we are populating the (user):to see that which user made this comment:
            // and we also need the (email) of the (user):to see that which (user) create that (comment):
            // and  also we  need that (email-id):for sending him the(Mail):
           comment = await comment.populate('user', 'name email');
            // here we are using the (comment_mailer) function:that we have created for sending (mail) to the (user):
            // commentsMailer.newComment(comment);


            // here we are creating or giving the  (job) to the (queue) that we have created :for sending (mail) to the (user):if they made the comment on the website:
            // here we are giving or putting the (task) in the (queue):or we can say creating the (task) for the (queue) or in the  (queue):

            // for creating task for the (queue):
            // for creating (job) or (task) on the (queue): we have to use the property (create) on the (queue) that we have created in the  (Kue) file:

            // this (queue.create) function will have to things:
            // one is the type of the (queue) or we can say name of the (queue):to tell the kue-worker or we can say to the (process) function: that kind of (job) or (task) we have given to this (queue):
            // second we gave the (comment) data to the (queue):that we want to send in that (mail):
            // we are also using the (save) function:that will save this (task) in the (database) as well:
            let job = queue.create('emails',comment).save(function(err){
                // we are also giving the callback function:
                if(err){
                    // if we have error creating (job) in the (queue:
                    console.log('error in giving a job to the  queue',err);

                    return;
                }
                // if we did not have error while creating (job) in the (queue)):
                // it means that we have created  a (task) or (job) in the queue:
                // then we will print that (job.id) in the (console):
                // we will get this (job.id):through the (job) variable:In which we are creating the (job) for the (queue):
                console.log('job enqueued',job.id);

            });



            if (req.xhr){
                return res.status(200).json({
                    data: {
                        comment: comment
                    },
                    message: "Comment created!"
                });
            }

            req.flash('success', 'Comment published!');

            res.redirect('/');


            if (req.xhr){
                // Similar for comments to fetch the user's id!
                // comment = await comment.populate('user', 'name').execPopulate();
    
                return res.status(200).json({
                    data: {
                        comment: comment
                    },
                    message: "Post created!"
                });
            }


            req.flash('success', 'Comment published!');

            res.redirect('/');
        }
    }catch(err){
        req.flash('error', err);
        return;
    }
    
}


module.exports.destroy = async function(req, res){

    try{
        let comment = await Comment.findById(req.params.id);

        if (comment.user == req.user.id){

            let postId = comment.post;

            comment.remove();

            let post = Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}});

            // send the comment id which was deleted back to the views
            if (req.xhr){
                return res.status(200).json({
                    data: {
                        comment_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }


            req.flash('success', 'Comment deleted!');

            return res.redirect('back');
        }else{
            req.flash('error', 'Unauthorized');
            return res.redirect('back');
        }
    }catch(err){
        req.flash('error', err);
        return;
    }
    
}