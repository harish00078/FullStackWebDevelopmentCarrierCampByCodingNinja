// here we create (router) for the (comments) controller:

const express = require('express');

const router = express.Router();

const passport = require('passport');

// here we import the (comments_controller) controller: so we can gave (router) to it:
const commentsController = require('../controllers/comments_controller');

// here we gave (router) to the (comments) controller:
// here we are connecting the (comment) router with the  (possport.checkauthentication) function:that we have created:so that Only the (login-user) able to (use) the  (comment-form) on the (webpage):


router.post('/create', passport.checkAuthentication,commentsController.create);


// we also have to export this (router):
module.exports  = router;
