// here we gonna learn about that:how we can use the redux with vanilla-js:

// => 1 = after installing redux we have to import it in our js or application file:
// IMP = so for importing (redux). we use the (require) method:
const redux = require("redux");

// => 2 =[Actions-section]= after importing the redux we need build the (actions-section).acc to our application:
// => [actions] section:it has basically have divided into two parts:
// -> first is to define the (actions or action-types):
// -> second is to create the (actions):

// => here we are defining the (actions):
// for this application we only need the two actions:
// => here we are (defining) those actions.or we can say defining there types:
// -> add-todo:
// -> toggle-todo:

const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// => here we are (creating) those actions:
// IMP = we can create the (actions) using (action creators) or (action creator functions):
// IMP => action-creator-functions.mostly have two parameters in them:it can also have more than two parameters in them.this depend on the (action) object which we are creating:
// -> 1 = text or id or index:(text) or (id) related to the todo:
// -> 2 = type:type of the todo:or we can say that the (action-type) of the todo:

// -> first we create addTodo-action:
const addToDo = (text) => ({ text: text, type: ADD_TODO });

// ->  second we create toggleTodo-action:
const toggleToDo = (id) => ({ id: id, type: TOGGLE_TODO });

// => 4 = [Initial state]: here we are defining the (initial state) of the application:because when we are creating the redux-architecture (store) for application we need to define the initial state with in it as well:
const initialState = {
  todos: [],
};

// => 3 = [Reducers-section]:reducers are used to change the state of the application on the store:they are basically the (pure-functions):
// IMP = reducers basically have the (state) and (action) as an argument in them:and it will return the new state or the updated state:
// V.IMP-NOTE = In reducers we have to define the (default) state:and that is gonna be our (initial-state):
// => here we are defining the (reducer):by creating the (todoReducer) pure-function:
function todoReducer(state = initialState, action) {
  // IMP = before performing any action on the state we need to check the action-type:for doing that we gonna be use the (switch-case) statement:
  switch (action.type) {
    // IMP = if we have any action type that is (add-todo) or (toggle-todo):
    // V.IMP = then we will return a new object which will become our new application state:it will contain the old state of the application spreaded in it with the help of the spread operator:
    // V.IMP = and we will also add or update the specific property of the current state within the new object or new state:which is related to the action type:
    case ADD_TODO:
      // IMP = here we are returing the new-state:
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
