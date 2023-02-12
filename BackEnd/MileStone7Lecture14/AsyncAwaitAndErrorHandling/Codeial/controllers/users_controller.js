const User = require('../models/user');


module.exports.profile = function(req, res){

    // here we are showing the (profile-page) to (user):
    // who successfully able to log-in on the (website):

    // for giving the (user) its (profile-page):
    // we have to first (check) that (user) present in the database or not :and then gave him the (profile-page) with its (data):

    // here we are getting the  (user) in the (database):with the help of (findById) method:because from (req) argument: we are getting the (id) of the (user):
    User.findById(req.params.id,function(err, user){

        return res.render('user_profile', {
            title: 'User Profile',
            profile_user:user
        });

    });


}

// here we create (controller): for (updating) the (user-profile):
module.exports.update = function(req,res){

    // first we have to check or match the (user) who make the (update) (req):with the (profile_user) that  both the (users) are the same or not:then only we (Update) the (data) or (profile-data) of the (user):
    // here simply (id) resperent the (Id) of the (profile_user):
    if(req.user.id == req.params.id){

        // know we have to (update) the (data) of the (user_profile) in the (database):that we are getting from the (form):that we have created on the (profile-page):
        // we can do that with the help of (findByIdAndUpdate) function:
        // here  (req.body):will basically have the (form) values or we can say the (data):that we have to (update) on the (req.params.id) in the (database):
        User.findByIdAndUpdate(req.params.id, req.body,function(err,user){

            return res.redirect('back');
        });


    }else{

        // if (user) does not match with the (profile_user):
        // then we will gave the (http) resquest (error) to the (user):
        // and here we are giving the (401) HTTP (request) error to the (user):and that is (unauthorized);
        
        return res.status(401).send('Unauthorized');
        
    }


}






// render the sign up page
module.exports.signUp = function(req, res){
    // here we are ristricting the (user):for again going  on the (sign-up) page:after that once he successfully able to (log-in) or we can say (signed-in) in the (webpage):

    if(req.isAuthenticated()){

        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){


    // here we are ristricting the (user):for again going  on the (sign-In) page:after that once he successfully able to (log-in) or we can say (signed-in) in the (webpage):

    
    if(req.isAuthenticated()){

        return res.redirect('/users/profile');
    }



    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){


    // here we create (massege) for the (user) on successfully able to (login) on the (webpage):with the help of (flash):
    // we have to gave him the (two) arguments:
    // 1 = first is the types of the (flash) massege:
    // 2 = second is  the (massege) that we want to show to the (user):on the (webpage):

    req.flash('success','Logged In Successffully');




    // here we are basically creating a (session):for the (user):
    // if (user) was (successfully) able to (signed-in):

    // know here in this (createSession) function or we can say In (controller):
    // we only have to gave the (redirection-response) here:
    // IMP = because all the (other) things (related) to the (sessions) were handle by the (passport):

    // here we only have to gave the (redirect-response) to  the (user) of the (home-page):if (user) was successfully (signed-in) in the (web-site):
    
    return res.redirect('/');

}




// here we create (Controller) for the (sign-out):


module.exports.destroySession = function(req,res){

    // here we (signed-out): the (user):
    // for (siging-out) the (user):we have to simply use the inbuild (logout) function of the (passport):

    req.logout();

    // req.logout(function(err) {

    //     if (err) {
            
    //         console.log('have error in log-out');
    //         return;
    //     }
    

    //   });

    

    req.flash('success','you have logged out!');


    // after (signed-out):we have to (redirect) the (user) to the (home-page):
    return res.redirect('/');
}
