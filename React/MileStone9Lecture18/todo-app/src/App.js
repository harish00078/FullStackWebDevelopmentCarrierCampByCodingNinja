import { useState } from "react";
import "./App.css";
import TodoForm from "./components/ToDoForm/TodoForm";
import TodoList from "./components/ToDoList/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  // createTodo function:
  const createTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };
  // toggleTodo Function:

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onCreateTodo={createTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
