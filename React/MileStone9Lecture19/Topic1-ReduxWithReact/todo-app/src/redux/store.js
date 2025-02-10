// first: we import the (redux):with the help of (ES6) syntax:
import redux from "redux";

// second: we have to import the (reducer):through which we are gonna be able to create or manage our store:
import { todoReducer } from "./reducers/todoReducers";

// third: here we create the store:
// and we also have to export the store:so that we can interact or use it with in our application:
export const store = redux.createStore(todoReducer);

