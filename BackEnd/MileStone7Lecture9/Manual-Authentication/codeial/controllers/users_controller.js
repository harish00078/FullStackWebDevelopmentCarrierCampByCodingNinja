// here we are creating another (controller):named as (user):

// under this controller be basically write all controllers: those are related to the User-url (req):

// means that we have to  create a multiple (responses) for the user-url (req):
// because there are multiple (user) present in the (database):
// they had there own (data) and  there own (profile):

// like: if client use the (/user/profile):then we will gave him a response from the  (profile) controller: that we created in this (user-controller) file:

// if client  use the (/user/update):then we will gave him a response from the (update) controller: that we have created in this (user-controller) file:

module.exports.profile = function(req, res){
    // res.end('<h1>User Profile</h1>');
    return res.render('user_profile', {

       

     title: "user profile"
 });

};

// here we create (controller) or we can say (action): for the (sign-up) page:
module.exports.signUp = function(req,res){

    return res.render('user_sign_up',{

        title:'codeial | Sign Up'
    });
};


// here we create (controller) or we can say (action): for the (sign-in) page:
module.exports.signIn = function(req,res){
    
    return res.render('user_sign_in',{

        title: "codeial | Sign In"
    });
};
