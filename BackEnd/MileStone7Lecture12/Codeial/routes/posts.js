const express = require('express');

const router = express.Router();

const passport = require('passport');

// here we import the (post) controller: so we can gave (router) to it:
const postController = require('../controllers/Posts_controller');

// here we gave (router) to the (post) controller:
// here we are connecting the (Post) router with the  (possport.checkauthentication) function:that we have created:so that Only the (login-user) able to (use) the  (post-form) on the (webpage):


router.post('/create', passport.checkAuthentication,postController.create);


// we also have to export this (router):
module.exports  = router;

