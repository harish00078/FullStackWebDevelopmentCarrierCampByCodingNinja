import "./TodoList.css";
function TodoList({ todos, onToggle }) {
  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="context">{todo.text}</span>
            {/* ternary operator expression */}
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                onToggle(index);
              }}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
