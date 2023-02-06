const express = require('express');

const router = express.Router();

// here we import the (post) controller: so we can gave (router) to it:
const postController = require('../controllers/Posts_controller');

// here we gave (router) to the (post) controller:

router.post('/create', postController.create);


// we also have to export this (router):
module.exports  = router;

