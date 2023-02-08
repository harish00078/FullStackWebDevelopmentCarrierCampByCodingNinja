const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));


// here we connect the (posts) router file: 
// were we create the  (router) for the (Posts):
// here we can connect that (post) router file:with our (main) router file:
router.use('/posts',require('./posts'));


// here we connect the (comments) router file: 
// were we create the  (router) for the (comments):
// here we can connect that (comments) router file:with our (main) or (Index) router file:

router.use('/comments',require('./comments'));







// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;