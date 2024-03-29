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

function showNotification(text) {
  alert(text);
}

// => 1 = here we create the (event-handler) function:with in which we will be get the (value) from input element as a (event):
// so this function will get the (event) as (argument) with in it:
function handleInputKeypress(e) {
  // here we check that:if user press the (Enter) key on keyboard:then it means that user is done with typing:
  // we check that through if our event have a (Enter) key in it:
  if (e.key === "Enter") {
    // if its (true):then we have to get typed value of user from the event:
    // IMP = for that we have to use the (target) function and (value) method of the (event) on the event it self:
    const text = e.target.value;
    

    if (!text) {
      // here we are using the function that we have created:through which we gonna be show the alert message to the user:
      showNotification("Task Text Can Not Be Empty");
      // after showing the notification:we have to return from this function:because we are done working with this function here:
      return;
    }

    // IMP = but if we have the text value:then we gonna be create the task with the help of it:
    // task is basically a object:
    const task = {
      // here we are using the key-value pair method:
      // text:text,
      // we can also define it in this way as well:because it is the some thing:
      text,
      // IMP = With In the (Id) key we gonna be provide the (current-date) to it:and that date gonna be become the (unique-id) for our each and particular task:
      // IMP = Date.now() is a static method that returns the number of milliseconds elapsed since a specific point in time.
      // we also have to convert it into the form of string:for doing that we gonna be use the (toString) method on it:
      id:Date.now().toString(),
      // here we have (done) key:which basically repersents that  particular (task) is done or not:
      // by default it will have (false) value:because every newly created task gonna be undone by default:
      done:false

      

    };
    // once we have created the task with the help of user's text:
    // then after that we also have to clear out that text from the input element:
    // we ganna be clear it out:by providing the (empty) string to it:we gonna be provide the empty string to it through the (event):the way we get the value of input-element through (event):In the same way we gonna be provide or assign the empty-string value to it:
    e.target.value = '';

  }

}
// => 2 = IMP = for getting the value of input-element:we gonna be add the (eventListener) on it:
// we gonna be add the (keyDown) event-listener on it:
// IMP = so that whenever (user) press any key on the keyboard with in the input-element:we will get the (value) of that particular key:
// here we are adding the (event-listener) on (input) element:
// IMP = for adding the event-listener on element:we gonna be use the (addEventListener) function of (DOM):
// we also need to provide the event-handler function to event-listener:through which we gonna be handle this event-listener:
addTaskInput.addEventListener("keydown", handleInputKeypress);
