const express = require('express');

const router = express.Router();

// here we store (posts) (api-request) controller route in the (variable):
// so that we can check the (api) or  gave him the  (right) controller:
// acc to the (api) request that we are getting from the (user):
const postsApi = require('../../../controllers/api/v1/posts_api');


// here we gave controller to this (api-request):
router.get('/', postsApi.index);

// here we create (delete) post (route) through the (api):
router.delete('/:id', postsApi.destroy);





module.exports = router;
