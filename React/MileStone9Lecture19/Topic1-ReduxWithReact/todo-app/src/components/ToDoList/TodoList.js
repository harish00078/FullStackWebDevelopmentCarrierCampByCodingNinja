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
// - The Redux store holds the global state of the application.
// - In simple terms, the store represents the state.
// - The React-Redux library provides built-in hooks and components to efficiently interact with the store.

// ==========================================
// 3. Accessing Data with the useSelector Hook
// ==========================================

// -> V.IMP: The useSelector hook from the React-Redux library allows components to access the Redux store efficiently.
// -> The store is provided by the <Provider> component from React-Redux, eliminating the need to manually import the store into each component.
// -> V.IMP: The useSelector hook enables us to retrieve only a specific section of the state rather than the entire store, improving performance.
// -> V.IMP: It ensures automatic updates—whenever the selected state changes, the component re-renders to reflect the latest data.

// ------------------------------------------
// 1. Usage of useSelector Hook
// ------------------------------------------

// Step 1: Import useSelector from react-redux:
import { useSelector } from "react-redux";

// Step 2: Import the required CSS file
import "./TodoList.css";

// Step 3: Use useSelector to access the store (state) provided by the <Provider> component:

// ------------------------------------------
// 2. Explanation:How To Use The useSelector-hook
// ------------------------------------------

// 1. [The useSelector Hook]:
// - The useSelector hook takes a callback function as an argument.
// - This callback function receives the Redux store (state) as its parameter.

// 2. [Accessing Specific State]:
// - Using the state parameter, we can extract a specific section of the Redux store.
// - This allows components to retrieve only the necessary data based on their requirements.

// ==========================================
// 4. Example: To-Do List Component
// ==========================================

function ToDoList({ todos, onToggle }) {
  // ------------------------------------------
  // 3. Using the useSelector Hook
  // ------------------------------------------

  // -> The useSelector hook is used to access specific data from the Redux store.
  // -> The function inside useSelector receives the entire Redux state and returns only the required portion.

  const 

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
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
// ✅ Use parentheses () when you have a single statement (it returns automatically).
// ✅ Use curly braces {} when you have multiple lines (you must use return).
