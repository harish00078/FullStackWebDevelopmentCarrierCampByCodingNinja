// here we have created the (tasks) array:
// In which we will stores the (tasks) as an object:
const tasks = [];
// => 1 = here we get the tasks-list element which is (ul) element:through the (getElementById) function of (DOM):
// IMP = for accessing the (tasks-list):we need to pass the (id) of (tasks-list) element:To this (getElementById) function of (DOM):
const tasksList = document.getElementById("list");
// => 2 = here we get the (input) element:so that we can get the (input-value) from it:
const addTaskInput = document.getElementById("add");
// => 3 = here we get the (tasks-counter) element:so that we can provide the real count of tasks to it:
const tasksCounter = document.getElementById("tasks-counter");

console.log("its working hurry");

// addTaskToDOM function:through this function we gonna be add or pass all the tasks to the DOM:
// IMP = through this function:we gonna be create the (lists) and pass the (tasks) or tasks-data one by one to them:
// this function will get the task as an argument with  in it:
function addTaskToDOM(task) {
  // first we create list-tag:
  const li = document.createElement("li");
  // second we create the html structure for this list-tag:
  li.innerHTML = `

  <input type="checkbox" id="${task.id}" ${
    task.done ? "checked" : ""
  }class="custom-checkbox">
  <label for="${task.id}">${task.text}</label>
  <img src="" class="fa-solid fa-trash" data-id="${task.id}">

  `;
  // third we have to  append or add these(List-tags  ) into our (unordered-list) tag:
  tasksList.append(li);
}

// renderList fucntion:through which we gonna be show the list of task in application:
function renderList() {
  // here we are first empting the (inner-html) of (task-list) element:
  // so that we can render the new list of tasks in the task-list element:
  // IMP = or the other way of doing it is that we have to first get all the tasks from the list and then add the new one in it:
  tasksList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    // here we another function:through which will basically gonna be pass all the tasks one by one to the DOM:
    addTaskToDOM(tasks[i]);
  }
  // provide tasks count-data to task-counter:
  tasksCounter.innerHTML = tasks.length;
}
// markTasksAsComplete function:through which we gonna be mark the task as completed:
// IMP = this function also gets the (taskId) as argument in it:because we wanna know that which particular task have to mark as completed:
function toggleTask(taskId) {
  // here we are finding out the (particular-task) from tasks-array:with the help of filter method:
  const task = tasks.filter(function (task) {
    return task.id === taskId;
  });

  // filter method will return us the new-array:if with in that array we have any task then it  means that we have found the particular task:
  if (task.length > 0) {
    // our task should be at the (0) index of new task-array:
    const currentTask = task[0];
    console.log("currentTask", currentTask);

    // after getting out the particular task or task-object:we have to change its (done) properties (value):or we can say its (toggle) properties (value):
    currentTask.done = !currentTask.done;

    renderList();
    showNotification("Task toggled successfully");
    return;
  }
  showNotification("Could not toggle the task");
}
// deleteTask function:will delete the task:
// IMP = this function also gets the (taskId) as argument in it:because we wanna know that which particular task be have to delete:
function deleteTask(taskId) {
  // for deleting task. we gonna be create the newtask array.which does not have task with in it.that we wanna be deleted:
  // IMP = we gonna be do this with the help of (filter) method:this filter method basically gonna be filter out the older tasks-array by deleting the task from it acc to the taskId which we have provided to him:and it will gonna be return us the new task-array:
  // which basically does not have the task with in it.that we have just filter out and delete from the older tasks-array:
  // IMP = this filter method basically gets the (callback) function as an argument:
  const newTasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  // IMP = and after filerting out the (older-task):we gonna be pass that new tasks-array to it:In this way we gonna be delete the particular task from tasks-array:
  tasks = newTasks;
  renderList();
  showNotification("Task Deleted successfully");
}
// addTask function:through this function we gonna be add or append the new-task which has been created by the user in the array of (tasks):
// IMP = that's why this function will get the (task) object as argument in it:
function addTask(task) {
  if (task) {
    // pushed the task into the tasks-array:
    tasks.push(task);
    // call the renderList function:which basically render all the tasks on the browser:
    renderList();
    showNotification("task added successfully");
    return;
  }
  showNotification("task can not be added");
}

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
    console.log("text", text);
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
      id: Date.now().toString(),
      // here we have (done) key:which basically repersents that  particular (task) is done or not:
      // by default it will have (false) value:because every newly created task gonna be undone by default:
      done: false,
    };
    // once we have created the task with the help of user's text:
    // then after that we also have to clear out that text from the input element:
    // we ganna be clear it out:by providing the (empty) string to it:we gonna be provide the empty string to it through the (event):the way we get the value of input-element through (event):In the same way we gonna be provide or assign the empty-string value to it:
    e.target.value = "";

    // here after building the task:with the help of (user) input:
    // we gonna be pass that (task) to the (addTask) function:
    addTask(task);
  }
}
// => 2 = IMP = for getting the value of input-element:we gonna be add the (eventListener) on it:
// we gonna be add the (keyDown) event-listener on it:
// IMP = so that whenever (user) press any key on the keyboard with in the input-element:we will get the (value) of that particular key:
// here we are adding the (event-listener) on (input) element:
// IMP = for adding the event-listener on element:we gonna be use the (addEventListener) function of (DOM):
// we also need to provide the event-handler function to event-listener:through which we gonna be handle this event-listener:
addTaskInput.addEventListener("keydown", handleInputKeypress);

// here we have event-handler function:for our event-delegation's (event-listener):
function handleClickListener(e) {
  const target = e.target;
  console.log(target);
  // how we gonna be find out the particular element through the click-event:
  // we gonna be find them out with the help of there class-names:the class names which we have to given to our each element:
  if(target.className === 'delete'){

  }else if(target.className === 'custom-checkbox'){

  }
}

// here we are doing the (event-delegation):
document.addEventListener("click", handleClickListener);
