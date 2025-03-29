// IMP:while we are migrating the reducers and actions:from redux to redux-toolkit:

// [First-Part]:
// -> we did not have to import the (actions) from the actions-file into the reducer-file:

// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";


const initialState = {
  todos: [
    { text: "Meeting at 9", completed: true },
    { text: "Lunch at 2", completed: false },
  ],
};

// IMP:Creating Reducer Using Redux-Toolkit:
// -> For Creating the (reducer) using redux-toolkit:we have to use the (createSlice) function of redux-toolkit:
// -> The createSlice function in Redux Toolkit defines a specific section of the application's state, similar to how we defined state in regular Redux reducers:but it does that in more efficient or simpler way:
// -> It does that by simply combining both reducers and actions into a single configuration for a particular feature or section and slice or part of the application or application-state:

// How We Gonna Do That:
// -> First-Step:
// -> We have to import the (createSlice) function from the redux-toolkit:

// -> Second-Step:
// -> we have to call or invoke the (createSlice) function:and store the result in a constant or variable:so that we can use it in our application by exporting it:
// IMP: we gonna name it as per our application or feature or section and slice or part of the application:





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
