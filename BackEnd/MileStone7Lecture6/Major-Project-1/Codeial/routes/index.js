// here we are creating our (routes):

// we basically create a (Tree) like structure here:
// (Tree): like structure means that we will basically get (req) from the (user): and acc to  that (req) basically create a another (file) for that (req). were we write all (response) for that particular (file) or (req):


// => for creating  a  (tree) like structure of the (routes):
// we have to use the Express's (router) module:


// first we import (express) here:

const express = require('express');

// know we can use the (router) module of the (express) framework:

const router = express.Router();

// for check that its working or not:
console.log('router loaded');


// after creating routes. know we have to (export) it for the (server-file):
module.exports = router;



