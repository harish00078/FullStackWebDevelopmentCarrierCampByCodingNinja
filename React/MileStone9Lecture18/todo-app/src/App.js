import "./App.css";

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onCreateTodo={createTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
