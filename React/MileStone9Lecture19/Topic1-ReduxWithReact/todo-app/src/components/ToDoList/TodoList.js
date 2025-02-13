
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

// IMP: To retrieve data within a component, we utilize the Redux store, which holds the application's state.
// IMP: The React-Redux library provides built-in custom hooks that allow us to access and interact with the store efficiently.

// Key-Point: Accessing Data with useSelector
// -> The useSelector hook, provided by React-Redux, enables components to access the Redux store without needing to import the store directly in each component.
// -> It allows us to retrieve specific sections of the state instead of the entire store.
// -> Additionally, it ensures automatic updates, meaning whenever the selected part of the state changes, the component re-renders automatically to reflect the latest data.


function ToDoList({todos, onToggle}) {
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