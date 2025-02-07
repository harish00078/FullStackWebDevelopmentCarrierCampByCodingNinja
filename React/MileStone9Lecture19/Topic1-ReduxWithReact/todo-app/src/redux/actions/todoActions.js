// Creating Actions:
// => As we have learned:that in redux-architecture's code action-section have two parts:
// -> first is to define the (actions or action-types):by storing the (action-types) in the (const) variable:
// -> second is to create the those (actions):using (action-creator-functions):

// -> Defining Actions:
const ADD_TODO = "ADD Todo";
const TOGGLE_TODO = "TOGGLE Todo";

// -> Creating Actions:using (action-creator-functions):
// Actions are basically the plain-js objects:so these (action-creator-functions) are used to create the (action-objects):
// -> Add-Todo:action-creator-function:
const addTodo = (text) => ({
  //   text: text,
  text,
  type: ADD_TODO,
});
// -> Toggle-Todo:action-creator-function:
const toggleTodo = (index) => ({
  index,
  type: TOGGLE_TODO,
});