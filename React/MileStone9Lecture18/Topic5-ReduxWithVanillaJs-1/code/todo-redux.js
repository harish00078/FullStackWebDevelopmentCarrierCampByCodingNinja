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


// => 4 = [Initial state]: the initial-state refers to the (default-state) of your application when it is first loaded: This state provides a starting point for your application and is used to populate the Redux store with data before any actions are dispatched:This approach ensures that your Redux store starts with a defined structure and default data, which is crucial for building predictable and maintainable applications:
// IMP-NOTE:In simple words it help us to define the initial structure of data for our application:through this we can also represent the initial state of data of our application to the (user) or to the (developer):that how they have to interact with the application:
// IMP-NOTE: In this application, the initial state is an empty array, representing an empty list of todos.
const initialState = {
  todos: [],
};

// => 3 = [Reducers-section]:reducers are used to change the state of the application on the store:they are basically the (pure-functions):
// IMP = reducers basically have the (current-state) and (action) as an argument in them:and it will return the new state or the updated state:
// V.IMP-NOTE = In reducers we have to define the (default) state:and that is gonna be our (initial-state):
// => here we are defining the (reducer):by creating the (todoReducer) pure-function:
function todoReducer(state = initialState, action) {
  // IMP = before performing any action on the state:first we need to check the action-type:for doing that we gonna be use the (switch-case) statement:
  switch (action.type) {
    // IMP = if we have any action type that is (add-todo) or (toggle-todo):
    // V.IMP = then we will return a new object which will become our new application state:it will contain the old state of the application which we have spread in it: with the help of the spread operator:
    // V.IMP = and we will also add or update the specific property of the current state within the new object or new state:which is related to the action type:
    case ADD_TODO:
      // IMP = here we are returning the new-state:
      return {
        // here we are basically updating the (todos) property of the (state) object:
        // IMP = we are basically adding the new-todo with old-todos:in the todos-property of the state-object:
        ...state,
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
        todos: todos.map((todo, index) => {
          if (index === action.id) {
            // => here we have two ways to change the (completed) property of the todo:
            // first-way:
            // completed:!todo.completed
            // second-way:
            todo.completed = !todo.completed;
          }
          // after changing the property of the particular-todo:we gonna have to return that todo:
          return todo;
        }),
      };
    default:
      return state;
  }
}
