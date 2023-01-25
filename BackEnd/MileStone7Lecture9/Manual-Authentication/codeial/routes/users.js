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

module.exports = router;