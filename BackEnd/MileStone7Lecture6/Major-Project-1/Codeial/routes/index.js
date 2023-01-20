// here we are creating our (routes):

// we basically create a (Tree) like structure here:
// (Tree): like structure means that we will basically get (req) from the (user): and acc to  that (req) basically create a another (file) for that (req). were we write all (response) for that particular (file) or (req):

// => for creating  a  (tree) like structure of the (routes):
// we have to use the Express's (router) module:

// first we import (express) here:

const express = require("express");

// know we can use the (router) module of the (express) framework:

const router = express.Router();

// here we are Importing the (controllers):that we have created in the (controller-folder):

// here we Import the (home_controller) file from the (controller-folder):
// under this (home_controller) file we basically write our (controllers) :
// IMP = 
const homeController = require("../controllers/home_controller");

// for check that its working or not:
console.log("router loaded");


// here we are connecting a particular (router) with the particular (controller):
// for that we have to use the (get) function:
// here we are doing that  if (router) gets this (req = '/') from the user:then we have him a this (home) controller in the (res):
router.get('/', homeController.home);



// after creating routes. know we have to (export) it for the (server-file):
module.exports = router;
