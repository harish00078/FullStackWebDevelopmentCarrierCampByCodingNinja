// here we gonna learn about that:how we can use the redux with vanilla-js:

// => 1 = after installing redux we have to import it in our js or application file:
const redux = require('redux');  

// => 2 =[Actions-section]= after importing the redux we need build the (actions-section).acc to our application:
// => [actions] section:it has basically have divided into two parts:
// -> first is to define the (actions or action-types):
// -> second is to create the (actions):

// => here we are defining the (actions):
// for this application we only need the two actions:
// => here we are (defining) those actions.or we can say defining there types:
// -> add-todo:
// -> toggle-todo: 
const ADD_TODO = 'Add TODO';
const TOGGLE_TODO = 'Toggle TODO';

// => here we are (creating) those actions:
// IMP = we can create the (actions) using (action creators) or (action creator functions):
// IMP => action-creator-functions.mostly have two parameters in them:it can also have more than two parameters in them.this depend on the (action) object which we are creating:
// -> 1 = text or id or index:(text) or (id) related to the todo:
// -> 2 = type:type of the todo:or we can say that the (action-type) of the todo:

// -> first we create addTodo-action:
const addToDo = (text)=>({text:text,type:ADD_TODO});

// ->  second we create toggleTodo-action:
const toggleToDo = (id) =>({id:id,type:TOGGLE_TODO});

// => 3 = [Reducers-section]:reducers are used to change the state of the application on the store:they are basically the (pure-functions):
// IMP = reducers basically have the (state) and (action) as an argument in them:and it will return the new state or the updated state:
// => here we are creating the (reducer):by defining the (todoReducer) pure-function:
function todoReducer(state,action){
    // IMP = before performing any action on the state we need to check the action-type:for doing that we gonna be use the (switch-case) statement:

    // here we are creating the (default) state:
}