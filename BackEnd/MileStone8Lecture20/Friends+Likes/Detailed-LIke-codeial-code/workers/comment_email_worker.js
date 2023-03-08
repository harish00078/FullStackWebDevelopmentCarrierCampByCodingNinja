// here we create (kue-worker) for the (email)job or we can say for the (email) queue:

// for the particular (job) or (queue):we can create a the (particular) kue-worker:

//first we have to import the (queue):that we have created or that we want to gave this kue-worker:
const queue = require('../config/Kue');


// second we have to import the (things):on which we want that (kue-worker) should work on:
// or we can say they should executed by (kue-workers):

// so we have created a (queue) for the (emails):and we only want to send that (mails):when ever a (user) commented on the (website):

// IMP = so here we have to import the (controller):through which we are sending the (mail) to the (user):when ever the (new) comment has been created on the (website):
// we have that controller on the (comments_Controller)file:

const commentsMailer = require('../mailers/comments_mailer');



// third: every (queue) have a (process) function:acc to that  (process) function:
// (kue-workers) will work on that (queue):or we can on those (jobs):which were present in that (queue):

// In (queue) process function:first (argument)that  we have to define that is the (type) of the (queue):
queue.process('emails',function(job,done){

  // here we  print some statement on the console:to see that our (kue-worker) is running or not:

  // (job.data):is basically the information about the (comment) or data about the (user):who created that (comment):
  console.log('emails worker is processing a job',job.data);

  // after that in process function :we have to define the another function:which will take two arguements:

  // IMP  = one argument is the (job):In that argument we will  define that:what kind of (work) or (job) that (kue-workers) has to do in this (queue): 

  // under this (job) arguement: we are doing the two things:
  // 1 = first we will call the function:which will send the (mail) to the (user):like(commentsMailer) function:
  // 2 = second we will gave the  (data) about the  (user) :that we want to send in that (mail):for that  we have to do the (job.data) value to the (function):which will send the (mail) to the (user):
  commentsMailer.newComment(job.data);

  // after that we have to gave the (done) argument in the (process):to tell the (kue-workers) that the (job) has been complete successfully:
  // basically we invoke done() only when the job is complete:
  done();





});
