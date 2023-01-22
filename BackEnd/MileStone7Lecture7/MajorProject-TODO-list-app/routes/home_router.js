const express = require('express');

const router = express.Router();


const homeController = require('../controllers/home_controller');

console.log('router is working');

/// If our Router get this (url = '/'):
// then In (response) we have to gave this (home_controller) file:
// were we write our controller for the (home) url's (response):
router.get('/',function(err){
  if(err){
    console.log('have error',router.get);
    return
  }

  return require(homeController.home);
});



module.exports = router;