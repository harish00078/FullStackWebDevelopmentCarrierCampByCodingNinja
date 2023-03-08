// here we create the router for the (likes_controller):

// for that first we have to Import the (express):
const express = require('express');

// second we have to use the (express-router) function:to creating (router) for the (likes_controller):

const router = express.Router();

// third we have to (import) the (likes_controller):so that we can connect it with its (route):

const likesController = require('../controllers/likes_controller');

// fourth we create the  (route) for the (likes_controller):
// and we are connecting this particular (route):with the particular (function or action):
// that we have created under that (likes_controller):
router.post('/toggle',likesController.toggleLike);






// here we are exporting the router that we have created for the  (likes_controller):
module.exports = router;

