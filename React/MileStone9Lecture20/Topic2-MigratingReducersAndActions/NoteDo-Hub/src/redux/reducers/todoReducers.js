// IMP:while we are migrating the reducers and actions:from redux to redux-toolkit:

// [First-Part]:
// -> we did not have to import the (actions) from the actions-file into the reducer-file:

// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

// IMP: we have to import the (createSlice) function from the redux-toolkit:through which we gonna create the reducer and actions:
import{createSlice} from '@reduxjs/toolkit';


const initialState = {
  todos: [
    { text: "Meeting at 9", completed: true },
    { text: "Lunch at 2", completed: false },
  ],
};

// IMP:Creating Reducer and Actions Using Redux-Toolkit:
// -> For Creating the (reducer) and actions using redux-toolkit:we have to use the (createSlice) function of redux-toolkit:
// -> The createSlice function in Redux Toolkit defines a application's state for the specific-section of the application, similar to how we defined state in regular Redux-reducers:but it does that in more efficient or simpler way:
// V.IMP:createSlice helps us to do (State-management) for a specific section of our application within a (single-file) by combining state, actions, and reducers in (one-place).in more appropriate and efficient-way:
// -> IMP: It does that by simply combining both reducers and actions into a single-configuration for a particular section or part of the application or application-state:

// => How We Gonna Do That:
// -> First-Step:
// -> We have to import the (createSlice) function from the redux-toolkit:

// -> Second-Step:
// -> we have to call or invoke the (createSlice) function:and store its result in a constant or variable:so that we can use it in our application by exporting it:because with in it we are gonna create the reducer and actions:
// V.IMP: we gonna name it as per our application section or part for which we are creating the reducer and actions:we also gonna use the (Slice) word in the name of the reducer in the end:

// How we configure the (createSlice) function:
// -> First-Step:It takes the (object) as an argument:
// -> Second-Step:Know with in that object:we basically configure our reducer and actions:



const todoSlice = createSlice({

});







// [Second-Part]:
// IMP:we also have to remove the (reducer):while we are migrating the reducers and actions:from redux to redux-toolkit:
// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,

//         todos: [
//           ...state.todos,

//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,

//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             todo.completed = !todo.completed;
//           }

//           return todo;
//         }),
//       };

//     default:
//       return state;
//   }
// }
