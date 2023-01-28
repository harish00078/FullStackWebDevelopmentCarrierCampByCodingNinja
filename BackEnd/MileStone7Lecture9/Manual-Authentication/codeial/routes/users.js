const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');

router.get('/profile', usersConrtoller.profile);

// here we create (routes):for the (sign-In) or (sign-Up) page:

// first we create for the (sign_up) page:
// here we connect our (/sign-up) router with the (user_controller)'s (signUp) function:
router.get('/sign-up',usersConrtoller.signUp);

// second we create for the (sign_In) page:
// here we connect our (/sign-in) router with the (user_controller)'s (signIn) function:
router.get('/sign-in',usersConrtoller.signIn);

// here we create (router): for the (create) function:
// that we created under the (user-controller):
// that (create) function:will create (new-user):
// here we use (post) function: because we are (posting) the data towards the (create) function: for creating (new-user):
router.post('/create', usersConrtoller.create);


// here we create (router):for the (createSession) function:
// that we have created under the (user_controller) file:
// this (createSession) function will gave us to the (user) of the (website):
// which he try to (login) or we can say try to (use):
router.post('/create-session',usersConrtoller.createSession);

module.exports = router;