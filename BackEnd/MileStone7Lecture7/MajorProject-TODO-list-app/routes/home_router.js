const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

// here if our (router) gets this ('/') url then we have to connect it with the (home_controller) file:
// were we have created a (controller) for our (app's home-page):
router.get("/", homeController.home);

// here we connect (home-router) with all the other (routers):
// so we did not have to create (every) router in the (server-file):
// we basically use (home_router) file: for handling all the other (routers):
// and connect those all  other (routers) with there (controllers): that we have created for them:

// => controlle for creating todolist:
router.post("/create_todo", homeController.createTodo);

// controller for deleting the todolist:
router.post("/delete_todo", homeController.deleteTodo);

// controller for getting edit page:
router.get('/editdata',homeController.EditPage);

// controller for editing todoList:
router.post('/edit-todolist',homeController.editDetails);

console.log('router is working fine');

module.exports = router;
