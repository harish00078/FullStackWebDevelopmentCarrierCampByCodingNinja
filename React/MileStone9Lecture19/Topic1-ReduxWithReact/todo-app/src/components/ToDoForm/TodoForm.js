import { useState } from "react";
// Importing (useDispatch-hook) from the react-redux library:
import { useDispatch } from "react-redux";
import "./TodoForm.css";


// Here we are handling-data in simple-way:with the help of (prop) method:

// function ToDoForm({ onCreateTodo }) {
//   const [todoText, setTodoText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onCreateTodo(todoText);
//     setTodoText("");
//   };

//   return (
//     <div className="container">
      
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="form-control mb-3"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button className="btn btn-success float-end" type="submit">Create Todo</button>
//     </form>
//     </div>
//   );
// }

// export default ToDoForm;


// Here we are handling-data with the help of state-management-library:which is the redux-library:
function ToDoForm({ onCreateTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
