// first: we import the (redux):with the help of (ES6) syntax:
// IMP-NOTE:we can import redux directly with in the (react) components:we have to import it as or with the (*) keyword:which means in the react that we are importing everything related to this library:
import * as redux from "redux";

// Importing the (combineReducers) method from the (redux) library:which basically help us to handle multiple reducers in the redux:
import { combineReducers } from "redux";

// second: we have to import the (reducer):through which we are gonna be able to create or manage our store:
// => TodoReducer:
import { todoReducer } from "./reducers/todoReducers";
// => NoteReducer:
import { noteReducer } from "./reducers/noteReducers";


// => Handling Multiple Reducers in Redux
// To manage multiple reducers efficiently, we use the combineReducers method provided by the Redux library.

// -> Using combineReducers:
// It allows us to merge multiple reducers into a single root or head reducer.
// This root or head reducer is then passed to the createStore method to create the Redux-store.

// -> Structure of combineReducers:
// It takes an object as an argument.
// -> IMP: Keys represent different sections or parts of the state.
// -> IMP: Values are the respective reducers that manage those parts of the state.


// IMP: After combining multiple reducers using combineReducers, we need to store the resulting root or head reducer in a variable. This allows us to pass it to the createStore method when creating the Redux store.
const headReducer = combineReducers({
    todos: todoReducer,
    notes: noteReducer,
})




// third: here we create the store:
// and we also have to export the store:so that we can interact or use it with in our application:
export const store = redux.createStore(headReducer);

