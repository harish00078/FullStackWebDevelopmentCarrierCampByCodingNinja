// here we gonna learn about that:how we can use the redux with vanilla-js:

// => 1 = after installing redux we have to import it in our js or application file:
const redux = require('redux');  

// => 2 = after importing the redux we need build the (actions-section).acc to our application:
// => [actions] section:it has basically have divided into two parts:
// -> first is to define the (actions):
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
// IMP = action-creator-functions.mostly have two parameters in them:
// -> 1 = text or id:(text) or (id) related to the todo:
// -> 2 = type:type of the todo:or we can say that the (action-type) of the todo:
// -> first we create addTodo-action:
const addToDo = (text)=>({text:text,type:ADD_TODO});
// ->  second we create toggleTodo-action:
const toggleToDo = (id) =>({id:id,type:TOGGLE_TODO});

