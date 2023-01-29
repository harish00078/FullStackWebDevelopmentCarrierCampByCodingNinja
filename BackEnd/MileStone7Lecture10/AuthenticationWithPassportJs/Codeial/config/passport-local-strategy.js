// here we are basically setting-up  our (passportJs):

// 1 = for that first we need to import it:
const passport = require("passport");

// 2 = second from (passport-local):we have to import the (library):named as (LocalStrategy) or we can say (Strategy):

const LocalStrategy = require("passport-local").Strategy;

// here we (import) user: so we can create (authentication) on it: through (passport):
const User = require("../models/user");

// 3 = here we create (Authentication) by using (passport):

// => first we need to tell the (passport) to use this (Local-Strategy) that we have created:

// => here we are using a (localStrategy) that we have created through (passport-local).strategy (library) and stored it in the (LocalStrategy) variable:

// => and through this (LocalStrategy) variable: we  basically create a new (local-strategy) for the (passport):

// => so that (passport) can use this  (local-strategy) for the (Auhentication):
// => this (Local-Strategies) basically help the (passport): for (Authentication):

passport.use(

  // local-strategies are basically like a (schema):or we can say its our (stratey) for doing a  (authentication) of the (user):
  // but here we only had to gave the those (objects) in the (local-Strategy):which we want to be  used as (authentication):

  new LocalStrategy(

    // under (local-strategy) function: 
    // we basically use two (functions):for the (complete) authentication of the (user):
    // 1 => first we (check) that we have (email) present for (authentication) or not:
    // 2 => if we have (email):then we also  have to (found) that (user) in the (database):for completing the (authentication):
    // because (user) will get its (data) from the (database):
    // In (database) we basically check the (two) things for the (authentication):
    // first => (email) was correct or not:
    // second => (password) was correct or not:


    // here we do our (first) function for (authentication):
    {
      
      // here we create (local-strategy) through (email): for doing a(Authentication) of the (user):
      // means in the (local-Strategy): we are basically doing a (Authentication) of the (user) through (email):

      usernameField: "email",

    },


    // here we do our (second) function for (authentication):

    // we also had to the found (user) in the (database):for completing the (Authentication) of the (user):
    // here we use inbuild-function of (passportjs):that is for the  (LocalStrategies) that we created;
    // we basically use this (function) for (finding-out) the (user) in the (database):
    // or we can say used for (establishing) the (identity) of the (user):
    // In this function:we basically have to gave the those (objects):which we want to be used as or we can say work as (completing) the  (authentication) in the (database):

    function (email, password, done) {
      // here we use (emial) or (password) as (authentication):for doing (user)'s (Authentication) in the (database):
      // (done) argument:basically represent the (successfull) working of the (function):

      // for (authentication): we need to findout that (email) is present in the (database) or ot :
      // or we can see we also have (check) the (email) present in the (database) or not: that we are getting from the (browser): for (authentication):
      // for finding or checking the (email): we are basically using a (findOne) function:

      User.findOne({ email: email }, function (err, user) {
        // if we does not found the user:
        if (err) {
          // then print this:
          console.log("Error in finding use through --> passport:");

          // and we also have to return from this  (function):for that we can use (return) function:
          // but here we also had to tell this thing to the other (function) or we can say to other (argument):
          // so that (argument) should also return from this function:if we have error while finding (user):
          // and that function or we can say (argument) is (done):
          // (done) basically get the (two) arguments on the (complition) of the (function):
          // but here we are getting (error) in the function: for that we only gave one-argument to the (done):
          // and that (argument) is (err):

          // V.IMP = here (done)  basically telling a (passport) that we did not (findout) the (user):
          // because (done) argument (basically) repesent the (Success-complition) of the (user)'s Authentication:

          return done(err);
        }

        // for completing the (authentication): we also had to (check) one-more (thing) and that is (password) of the (user):
        // so for that we can do :If we do not  found the (user) and the (user) password that we are getting from the (browser) is not equal to the (password) that  we have (stored) in the (database):

        if (!user || user.password != password) {
          // then we print this statement on the console:
          console.log("Invalid username/password");

          // after that we have to (return) for this function:
          // and we have also have to (return) the (done) argument:so that (passport) can understand that we did not able to (found) the (user):

          // here we gave to arugments to the (done):so (passport) can understand we did not found the (user):
          // here (null) repesent: that we did not (found)the  user:
          // and (false) repesent: that we did not yet complete the (passport.use) function:
          return done(null, false);
        }

        // here we handle that If we (found) the (user):In the (database):
        // then we have to return the (user): through the (done) argument:
        // from this (findOne) function:that use for (finding-out) the (user) in the (database):
        // we basically return the (user) to the (passport):
        return done(null, user);


      });


    }


  )


);



// 4 = after all these: we have to create the (two) more functions:
// those (two) functions: will we for the (cookies):
// basically for handling the (cookies):through (passport):

// first function Is:- (serializing) the (user) to decide that which key we want to be (kept) in the (cookies):



// second function Is: (deserializing) the (user) from the (key) in the (Cookies):