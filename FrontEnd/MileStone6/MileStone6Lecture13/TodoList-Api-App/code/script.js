// here we have created the (tasks) array:
// In which we will stores the (tasks) as an object:
const tasks = [];
// => 1 = here we get the tasks-list element which is (ul) element:through the (getElementById) function of (DOM):
// IMP = for accessing the (tasks-list):we need to pass the (id) of (tasks-list) element:To this (getElementById) function of (DOM):
const taskList = document.getElementById("list");
// => 2 = here we get the (input) element:so that we can get the (input-value) from it:
const addTaskInput = document.getElementById("add");
// => 3 = here we get the (tasks-counter) element:so that we can provide the real count of tasks to it:
const tasksCounter = document.getElementById("tasks-counter");

console.log("its working hurry");

// renderList fucntion:through which we gonna be show the list of task in application:
function renderList() {}
// markTasksAsComplete function:through which we gonna be mark the task as completed:
// IMP = this function also gets the (taskId) as argument in it:because we wanna know that which particular task have to mark as completed:
function markTasksAsComplete(taskId) {}
// deleteTask function:will delete the task:
// IMP = this function also gets the (taskId) as argument in it:because we wanna know that which particular task be have to delete:
function deleteTask(taskId) {}
// addTask function:through this function we gonna be add or append the new-task which has been created by the user in the array of (tasks):
// IMP = that's why this function will get the (task) object as argument in it:
function addTask(task) {}

// showNotification function:through which we gonna be show the multiple notifications to the (user):
// IMP = we are going to show the (text) as notification to the (user):(text) is basically the input (value) for (task) which has been created by the (user):
// On the behalf of notification we only gonna be show the (alert) message to the (user):which will basically have the (text) of the (user) as notification message:
// IMP = that's why we are passing the (text) as argument to this (function):

function showNotification(text) {}

// => 1 = here we create the function:through which we gonna be get the (value) of input element:this is a (event-handler) function:

function handleInputKeypress(){

}
// => 2 = IMP = for getting the value of input-element:we gonna be add the (eventListener) on it:
// we gonna be add the (keyDown) event-listener on it:
// IMP = so that whenever (user) press any key on the keyboard with in the input-element:we will get that (value) 
// here we are adding the (event-listener) on (input) element:
// IMP = for adding the event-listener on element:we gonna be use the (addEventListener) function of (DOM):
addTaskInput.addEventListener