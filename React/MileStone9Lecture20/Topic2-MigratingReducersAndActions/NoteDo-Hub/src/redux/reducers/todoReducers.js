// IMP:while we are migrating the reducers and actions:from redux to redux-toolkit:

// [First-Part]:
// -> we did not have to import the (actions) from the actions-file into the reducer-file:

// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { text: "Meeting at 9", completed: true },
    { text: "Lunch at 2", completed: false },
  ],
};

// IMP:Creating Reducer Using Redux-Toolkit:



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
