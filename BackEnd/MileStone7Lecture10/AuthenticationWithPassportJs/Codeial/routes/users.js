const express = require('express');
const router = express.Router();

// here we are importing the (passport):
// so we can (authenticate) our (user's) requests through passport:
// and if user's (request) get successfuly (authenticate): then we have to gave him the controller acc to its (request):
// first we have to import it:
const passport = require('passport');

const usersController = require('../controllers/users_controller');

// here we are checking the (user):through the (checkAuthentication) function that we have created under the (passport-file):before giving the (access) to the (user)  of the (profile) page:
router.get('/profile',passport.checkAuthentication, usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create);


// here we create (route): for the user's (req):
// but before giving the (controller) in (res) to that (req):
//  first we have to (authenticate) that (req) through the (passport):
// for that we have to use the (passport.authenticate) function:with its property (failureRedirect) for handling the (authentiation) failure:
router.post('/create-session',passport.authenticate(
  // here we define the (authentication) type:we are doing the (local) authentication:
  'local',
  // then we use (passport.authenication) functtion's property:named as (failureRedirect):for handling the (authentication) failure:
  // if (authentication) is failed:then we have to (direct) the (user):again to  the (sign-in) page:
  {failureRedirect:'./users.sign-in'}

  // if (authentication) get (passed):then we have to gave him the (controller) acc to its (req):
),usersController.createSession);


module.exports = router;