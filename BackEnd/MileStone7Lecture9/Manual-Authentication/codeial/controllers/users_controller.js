// here we are (Importing) the (user-model):
// so we can create the (user):
// with the help of (controller): were we are try to create the (user):
const User = require("../models/user");

// here we are creating another (controller):named as (user):

// under this controller be basically write all controllers: those are related to the User-url (req):

// means that we have to  create a multiple (responses) for the user-url (req):
// because there are multiple (user) present in the (database):
// they had there own (data) and  there own (profile):

// like: if client use the (/user/profile):then we will gave him a response from the  (profile) controller: that we created in this (user-controller) file:

// if client  use the (/user/update):then we will gave him a response from the (update) controller: that we have created in this (user-controller) file:




module.exports.profile = function (req, res) {

  // show only the (details) of the (user):on the (Profile-page):
  // how (successfully) Sign-In: 

  // V.IMP:-
  // 1 = for that (first) we need to check the (user) or (user_id) in the (cookies) that (user) is present or not:
  // here we are using that (user_id) variable that we have created under  the (createSession) function or we can say in the  (controller) :which had the (user_id) or we can say the user (identity):
  // because we create this (user_id) variable and connect it with the (user.id) that will (cookie) have (Stored) in it:
  //  we only do this after the (user) is (successfully) able to login in the (website): 
  // and also (return) that (user_id)  in the (reponse):

  // so we can check the (user): before providing him a (details) of his (profile) through  the (profile-page):



  // here we are checking that (user_id):
  // if it (present):then we have to gave him a access of the (website):
  // we are getting that (user_id): through the (req) argument:because we are connecting the (create-session) controller with the (profile-page) or we can say with the (profile-page) controller:

  if(req.cookies.user_id){

    // we  have to check that (user_id) in the (database):because (user) will get its data from the (database):
    // for checking the (user) in the (database):we can use the two methods:
    // 1 = first is (findOne):
    // 2 = second is (findById):
    
    // here we use (findById) method:
    User.findById(req.cookies.user_id,function(err,user){


      // if user-found:
      if(user){

        // then we will gave him a (profile-page):

        return res.render("user_profile", {

          // here we gave title to page:
          title: "user profile",

          // here we gave or return name of the (user):
          user: user


        });

        // if we are not able to (find-out) the user: then we have (redirect) the user to the (sign-in) page again:

      }else{
        
        return res.redirect('/users/sign-in');


      }

    


    });





    // if the (user_id) is not present:In the (cookie):
    // it means that (user) is not (successfully) able to (log-in) or (sign-in):
    // then we have to (redirect) him: to the (sign-in) page again:
  }else{

    return res.redirect('/users/sign-in');

  }




  // // res.end('<h1>User Profile</h1>');
  // return res.render("user_profile", {
  //   title: "user profile",
  // });



};

// here we create (controller) or we can say (action): for the (sign-up) page:
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "codeial | Sign Up",
  });
};

// here we create (controller) or we can say (action): for the (sign-in) page:
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "codeial | Sign In",
  });
};




//  here we are creating a (controller) for the (Sign-Up) form:that we have created under the (user_sign_up) ejs-file:
// IMP = so that user can create its (Identity):

module.exports.create = function (req, res) {

  // first we need to (check) the password that (user) is using is (correct) in both the (password-sections) or not:

  if (req.body.password != req.body.confirm_password) {

    // if they are not (correct): then we have to (redirect) the user to (sign-up) page again:so he can (try) to create its (identity) again:
    // In (redirect) function: we can also simply use or write  the ('back') instead of writing (/user/sign-up):
    // here we have to gave the (router) to the (redirect) function:not the (file-name):

    return res.redirect('/users/sign-up');

    // return res.redirect("back");
  }

  // but if both the (password-sections) have the (same) password: then we have to create the (user):if that user is not (already) present:

  // IMP = here we are checking the (emial) or we can say (user): if its not persent already in the (database): through which (new-user) try create it's  (identity):

  // for doing that we need to use the (model) that we have created with the name of (user):
  // and we can use (findOne) function on that For (finding-out) the (email) in the database:
  // we also have to gave the (email) to the (findOne) function:so he can check the (email):
  // we are doing that with the help of (req.body.email) value or object:
  // because (req) function will get that value from the (browser):

  User.findOne({ email: req.body.email }, function (err, user) {

    // if our function have (error):

    if (err) {

      // then we need to (print): this statement on the (console):

      console.log("error in finding user in signing up");

      return;
    }

    // if that (email) or we can say (user) is not (already):present in the (database):then we can create the new  (user):with that (email):

    if (!user) {

      // => here we are creating the (new-user) with the help of (model) or we can say with the help of (schema):
      // here we create (new-user): with the help of (req.body) argument that we are using the (create) function:
      // (req.body) argument will have all the (values) in it : that we needed for creating a (new-user):

      User.create(req.body, function (err, user) {

        // if error while creating (user):

        if (err) {
            
            // then we need to (print): this statement on the (console):

          console.log("error in creating user while signing up");

          return;
        }
        
        //  if we did not have (error):
        // then it means that we have created a (user);
        // know we have to (redirect) the (user) to the (sign-In)page: so he can use its (profile):
        // for redirecting the (user): we have to use the (routers) of the (pages):not  there (file-names):

        return res.redirect("/users/sign-in");
      });


      // else: if user (present):then we have to (redirect) the user to the (sign-up) page again:
      // here we have to gave the (router) to the (redirect) function:not the (file-name):

    } else {

        return res.redirect('/users/sign-up');

      // return res.redirect("back");
    }
  });
};





//  here we are creating a (controller) for the (Sign-In) form:that we have created under the (user_sign_in) ejs-file:
// IMP = so that user can (log-In) in its (Identity):


module.exports.createSession = function (req, res){

  // steps of (authentication):
  // first => we need to find-out the (user): if it is present or not:
  // for finding-out the (user): we need to use the function named as (findOne):
  // and we will find-out the (user):through (email):
  User.findOne({email:req.body.email},function(err,user){

    // if we have (error): while finding-out the (user):
    if(err){
      
      // print this is (statement) on the console:
      console.log("error in finding-out the user for = signing-In");
      // and return from there:
      return;
    }


    // but if we find-out the (user):

    // second => we need to handle the (user):if its (identity) is (present):

    if(user){

      // third => we also need to handle the case:were (user) will may be put the (wrong-password):
      if(user.password != req.body.password){
        

        return res.redirect('/users/sign-in');
      }


      
      // after handling all the things: know we can create-session for  the (user): or we can say gave (access) to the (user) of the (web-site):which one he try to (use):

      //  In (response): we are also giving the (user.id): that stored in the (cookie): so we can check that: this is  the same (user) or  identity:that we have also stored in the (database):
      // we are dong this for (our-self): for just checking that all the (things) are working fine or not:
      res.cookie('user_id', user.id);

      // here we gave (response) to the (user): of  the (profile-page):
      // to show that he (successfully) created its (profile) for the (website): know he can use the (web-site) with its owm (profile):

      return res.redirect('/users/profile');






    }else{

      // fourth => we need to handle if (user) is not (present):
      
      return res.redirect('/users/sign-up');
    }


  });








};
