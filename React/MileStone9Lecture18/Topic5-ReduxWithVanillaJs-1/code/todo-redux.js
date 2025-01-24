console.log("Learn To Use redux with vanilla js");
// here we gonna learn about that:how we can use the redux with vanilla or simple js:

// => 1 = after installing redux we have to import it in our js or application file:
// IMP = so for importing (redux) in our js-file. we use the (require) method:same thing we done with in our backend applications:
const redux = require("redux");

// => 2 =[Actions-section]= after importing the redux we need to build the (actions) or (actions-section).acc to our application:

// -> Learn About Action:
// Action is a plain JavaScript-object:that can have any number of fields:it can have a (type) field and an optional (payload) field:we can have more than one field in the action-object:but the (type) field is required in the action-object because it is used to identify the type of action:it basically depends on the application:
// IMP: In this application: we are gonna have the two (fields) in the action-object:
// -> 1 = the (payload) field: which is a (value) or (data) that we have to pass to the reducer:acc to which we want to update the state:
// IMP: the (payload) can be a (text) or (id) or (index):
// -> 2 = the (type) field: which is a string that indicates the type of action:we can pass it that string through the (variable) where we have stored the action-type as an string:

// -> Working On Action:
// => [actions]section: It has basically have divided into two parts:
// -> first is to define the (actions or action-types):
// -> second is to create the those (actions):

// -> 1 = Define Actions:
// -> 1 = here we are defining the (actions) or (action-types):for this application we only need the two actions:
// -> add-todo:
// -> toggle-todo:
// IMP-NOTE: To define action types, we use the const keyword. Based on the action type, we create variables using this const keyword, and within these variables, we assign the action types as (strings), typically matching the (variable-names). This is a common practice in Redux.
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";


// -> 2 = Create Actions:

// Action-Creators or Action-Creators-Functions used to create actions. These are pure functions that accept one or more arguments and return action objects. In Redux, actions are plain JavaScript objects.

// Action Objects: Contain at least a type property and can include additional data (payload) based on the application requirements.

// -> 1 = IMP-NOTE:In this application, action-creator- functions will accept only one argument: 
// the payload which is the text for the todo item or the ID of the todo item:and we get it from our application-components:because it passed as an argument from application-component for the action-creator-function:so that we can create the action-object:

// -> 2 = IMP-NOTE: The action type is directly defined with in the action creator function or we can say in (action-object):and it does not need to be passed as an argument to the action creator function:because it can be directly defined in the action-object:
// V.IMP:this may depend on the application's requirements:and it may vary from application to application: like here we are using the (redux) with (vanilla-js):
// V.IMP: and because of that our application or its redux-architecture is very simple:and we are not creating or defining the (action-types) or action-creator-functions on different-files:they are in the same-file:so because of that we can directly use the (action-types) in the action-creator-functions:
// V.IMP: but in the complex applications:we have to define the (action-types) in the separate-file:and then we have to import them as an (argument) in the action-creator-functions:and then we can use them in the action-creator-functions:
// V.IMP: but here we are not doing that:so that's why we can directly using the (action-types) in the action-creator-functions:only think we have to pass as an argument in the action-creator-function is the (payload) or the (data) that we have to pass to the reducer:because we are getting from our application-components or from the another-file:


// Action-Creator-Function to create (action-object) for the adding a new-todo item on state or application:
const addToDo = (text) => ({
  text: text,  // The payload, representing the todo text
  type: ADD_TODO // The action type, directly defined by variable:we have store it in the variable with in same-file:
});

// Action-Creator-Function to create (action-object) for toggling or updating-date of a todo item on state or application:
const toggleToDo = (id) => ({
  id: id,  // The payload, representing the todo ID
  type: TOGGLE_TODO // The action type, directly defined by variable:we have store it in the variable with in same-file:
});

// Action Objects in this application will have two properties:
// 1. Payload: e.g., text or id, relevant to the todo.
// 2. Action-Type: e.g., the type of the todo-action.

// IMP-NOTE: The structure of action-objects can vary depending on the application's needs and may contain more than two-properties.


// => 4 = [Initial state]: When the application first loads, the store is initialized with an initial state because, at that point, there is no existing data in the store. The initial state provides a predefined structure and default data, ensuring the application has a consistent (starting-point. This setup helps the store maintain the necessary data structure and ensures that components have a base state to work with. Once the store is updated with new data or state changes, components retrieve the updated state from the store and render it on the UI, reflecting the latest information to the user.
const initialState = {
  todos: [],
};

// => 3 = [Reducers-section]:reducers are used to change the state of the application on the store:they are basically the (pure-functions):
// V.IMP-NOTE:the (reducer) is a pure function that takes the (current-state) and (action) as an argument:and it returns the new state or the updated state:

// V.IMP-NOTE = In reducers we have to define the (default) state or we can say the (current-state) for our application:and that is gonna be our (initial-state):
// V.IMP-NOTE:because When the application first loads, the store is initialized with an initial state because, at that point, there is no existing data in the store. The initial state provides a predefined structure and default data, ensuring the application has a consistent (starting-point). This setup helps the store maintain the necessary data structure and ensures that components have a base state to work with. Once the store is updated with new data or state changes, components retrieve the updated state from the store and render it on the UI, reflecting the latest information to the user.

// => here we are defining the (reducer):by creating the (todoReducer) pure-function:
function todoReducer(state = initialState, action) {
  // IMP = before performing any action on the state:first we need to check the action-type:for doing that we gonna be use the (switch-case) statement-method:
  // IMP-NOTE:Because it allows us to handle multiple cases or conditions in a single-statement or we can say in a single-parameter:and it also helps us to avoid the (if-else) statements:and it also helps us to write more readable and maintainable code:
  switch (action.type) {
    // IMP = if we have any action type that is (add-todo) or (toggle-todo):
    // V.V.IMP-1 = then we will return a new-object which will become our new-application state:it will contain the old-state of the application which we have spread in it: with the help of the spread operator:
    // V.V.IMP-2 = and after that we will also add or update the specific property of the current-state with in the new-object or new-state:which is related to the action-type or action which we have performed on the state or application:
    case ADD_TODO:
      // IMP = here we are returning the new-state:
      return {
        // IMP:First we need to spread the old-state or current-state:with the help of the spread operator:because we are going to create the new-state for our application:
        ...state,
        // IMP: then we will basically gonna be update the (todos) property of the (state) object:acc to our action-type:
        // IMP = where in which:here we are are basically adding the new-todo with old-todos:In the todos-property of the state-object:
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };

    // IMP = if we have any action type that is (toggle-todo):
    case TOGGLE_TODO:
      return {
        ...state,
        // IMP = here we are basically using the todos-array (index) as a (id) of that particular todo:
        // IMP-NOTE:for checking the (id) of the todo with the (index) or (id) of other (todos): we are using the (arrow-function) with in the (map) function:which is gonna help us to get the particular (todo):whose property-completed property we want to change:

        todos: todos.map((todo, index)=>{
          if (index === action.id) {
            // => here we have two ways to change the (completed) property of the todo:
            // first-way:
            // completed:!todo.completed
            // second-way:
            todo.completed = !todo.completed;
          }
          // after changing the property of the particular-todo:we gonna have to return that todo:with in the (todos) array:
          return todo;
        }),
      };
      // Switch-case method:also have default-case:which is used to handle the default or unknown action-type:
    default:
      return state;
  }
}


// => 4 = [Creating-Store] section:
// IMP: For creating (store): we need to use the (createStore) method of the (redux) library:
// V.IMP:know that the (createStore) method is a function that takes a (reducer) as an argument which we have created first:and it returns a (store) object to us:
// V.IMP: which we can use to interact with the store:like we can use the (dispatch) method of the store or store-object to perform any action on the store:
const store = redux.createStore(todoReducer);

// V.IMP-NOTE:we are using Redux with plain JavaScript, meaning we won't have traditional React components interacting with the Redux store. Instead of components, we will use [specific-filename or description of the file] as the main entry point for our application logic:
// V.IMP-NOTE:For that here we are gonna use this (same-file) as our (component):
// To interact with the Redux store, we will define dispatcher functions within this file to trigger actions and create selector functions to extract specific parts of the Redux state as needed. While the terminal can be used for various purposes, for interactive development, consider using the Node.js REPL or a browser's developer console to test and interact with your Redux application:

// V.IMP: The store-object returned by the createStore method has the following methods:
// 1. getState: Returns the current state of the store.
// 2. dispatch: Dispatches an action to the store, triggering a state change.
// 3. subscribe: Subscribes a callback function to the store's changes.

// => 5 = [Handling-Actions] section:
// IMP: here we are using the (dispatch) method of the store object:to perform any action on the store: 
store.dispatch(addToDo('harish'));
