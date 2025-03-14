
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

// ==========================================
// Managing and Accessing State with Redux & React-Redux
// ==========================================

// 1. Introduction:
// - We manage and represent application data using Redux and React-Redux libraries.

// 2. Understanding the Redux Store:
// - The Redux-store holds the global-state of the application.
// - In simple terms, the store represents the state.
// - The React-Redux library provides built-in hooks and components to interact with the store-efficiently.

// ==========================================
// 3. Accessing Data with the useSelector-Hook
// ==========================================

// -> V.IMP: The useSelector-hook from React-Redux library allows components to access the Redux-store efficiently.which has been provided to us by the (provided-component) of the (react-redux) library:
// -> It eliminates the need to manually import the Redux store into each component.
// -> Retrieves only a specific section of the state rather than the entire store.
// -> Ensures automatic updates—whenever the selected state changes, the component re-renders automatically.

// ------------------------------------------
// Usage of useSelector Hook
// ------------------------------------------

// Step 1: Import useSelector from react-redux
import { useSelector } from "react-redux";

// Step 2: Use useSelector to access the store provided by the <Provider> component.
const selectedData = useSelector((state) => state.specificPart);
// - The function inside useSelector receives the entire Redux state and returns only the required portion.

// ==========================================
// 4. Example: To-Do List Component
// ==========================================

function ToDoList({ todos, onToggle }) {
  return ( 
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'pending'}>
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
            <button className="btn btn-warning" onClick={() => onToggle(index)}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

// ==========================================
// Important Notes:
// ==========================================
// ✅ Use parentheses () when you only have one statement (it returns automatically).
// ✅ Use curly braces {} when you have multiple lines (you must use return)  .

