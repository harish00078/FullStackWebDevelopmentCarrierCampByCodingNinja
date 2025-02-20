
import { useSelector } from "react-redux";
import "./TodoList.css";

// In this File: we are basically representing the data or todo-data on the application:

// First:we represents that data with the help of  app-component:which we do when be build the simple application:without the help of any library:

// function ToDoList({todos, onToggle}) {
//   return (
//     <div className="container">
//     <ul>
//       {todos.map((todo,index) => (
//         <li key={todo.id}>
//           <span className="content">{todo.text}</span>
//           <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
//           <button className="btn btn-warning"
//           onClick={()=>{onToggle(index)}}
//           >Toggle</button>
//           </li>
//       ))}
//     </ul>
//     </div>
//   );
// }

// Second: Here, we are managing and representing data using the Redux and React-Redux libraries.

// IMP: To have data with in the component, we use the Redux store, which holds the application's state:we can say that the (redux-store) is the (state):
// IMP: The React-Redux library provides built-in custom-hooks that allow us to access and interact with the store or state efficiently.

// Key-Point: Accessing Data with useSelector-hook:
// -> The useSelector-hook, provided by React-Redux, enables components to access the Redux store without needing to import the store directly in each component.
// -> It allows us to retrieve specific-sections of the state instead of the entire-store.
// -> Additionally, it ensures automatic-updates, meaning whenever the selected-part of the state-changes, the component re-renders automatically to reflect the latest-data.

// => working or usage of useSelector-hook:
// -> Import it from the react-redux library:
import {useSelector} from "react-redux";
// -> then use it to get the (store) or (state):which has been provide to us by the (provided-component) of the (react-redux) library as well:
// -> useSelector-hook takes a function or selector-function as an argument.
// -> The function-receives the entire Redux-store-state and returns the specific part of the state you need or which we basically define with in the function:

function ToDoList({todos, onToggle}) {
  const 
  return ( 
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{onToggle(index)}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;