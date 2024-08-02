// here we gonna learn about that:how we can use the redux in vanilla js:

// => 1 = after installing redux we have to import it in our js file:
const redux = require('redux');  
// => 2 = after importing the redux we have to create the (actions).acc to our application:
// for this application we only need the two actions:
// => here we are (defining) those actions.or we can say defining there types:
// -> add-todo:
// -> toggle-todo:
const ADD_TODO = 'Add TODO';
const TOGGLE_TODO = 'Toggle TODO';
// => here we are (creating) those actions:we can also call it (action creators) or (action creator functions).using which we are gonna create the  actions:
// IMP = action-creator-functions.basically have two parameters in them:
// -> 1 = text or id:(text) or (id) related to the todo:
// -> 2 = type:type of the todo:or we can say that the (action-type) of the todo:
// -> first we create addTodo-action:
const addToDo = (text)=>({text:text,type:ADD_TODO});
// ->  second we create toggleTodo-action:
const toggleToDo = (id) =>({id:id,type:TOGGLE_TODO});

