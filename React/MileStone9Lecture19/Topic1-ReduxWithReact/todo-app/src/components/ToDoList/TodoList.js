
// import { useSelector } from "react-redux";
// import "./TodoList.css";

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
// - The React-Redux-library provides built-in hooks and components to interact with the store-efficiently.

// ==========================================
// 3. Accessing Data with the useSelector-Hook
// ==========================================

// -> V.IMP: The useSelector-hook from React-Redux library allows components to access the Redux-store or state efficiently.which has been provided to us by the (provided-component) of the (react-redux) library:
// -> It eliminates the need to manually-import the Redux store into each component.
// -> V.IMP:we can also only retrieve the particular specific-section or part of the state rather than the entire-store with the help of (useSelector-hook):
// -> V.IMP:It also Ensures automatic updates—whenever the selected-state-changes, the component re-renders automatically.

// ------------------------------------------
//  1. Usage of useSelector Hook
// ------------------------------------------

// Step 1: Import useSelector from react-redux
import { useSelector } from "react-redux";

// Import the (CSS):
import "./TodoList.css";


// Step 2: Use useSelector to access the store or (state) provided by the <Provider> component:

// ------------------------------------------
// 2. How we use useSelector Hook
// ------------------------------------------

// => How we use the (useSelector-hook):To get the specific part of the data from the store or state:
// -> In simple-words: The function inside useSelector-hook receives or access the entire Redux-state and returns only the required portion.
// 1. [The useSelector Hook]:
// - The useSelector hook takes a callback function as an argument.
// - This callback function receives the Redux store (state) as its parameter or argument.
// 2. [Accessing Specific State]:
// - Using the state parameter or argument, we can extract or get a specific section of the Redux store.
// - This allows components to retrieve only the necessary data based on their requirements:

const todos = 

// ==========================================
// 3. Example: To-Do List Component
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

