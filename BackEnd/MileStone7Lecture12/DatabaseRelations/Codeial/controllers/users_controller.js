const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
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

    req.logout(function(err) {

        if (err) {
            
            console.log('have error in log-out');
            return;
        }
    

      });
    



    // after (signed-out):we have to (redirect) the (user) to the (home-page):
    return res.redirect('/');
}



