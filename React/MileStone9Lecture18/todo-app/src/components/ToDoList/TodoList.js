import "./TodoList.css";
function TodoList({ todos, onToggle }) {
  return (
    <div className="container">
      <ul>
        {todos.map((todos, index) => (
          <li>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
