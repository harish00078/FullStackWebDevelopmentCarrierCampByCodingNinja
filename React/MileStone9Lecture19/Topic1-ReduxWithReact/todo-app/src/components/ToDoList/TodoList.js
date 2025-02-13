
import "./TodoList.css";

// IMP:know here we are getting the (todos):from the (app-component):we are not using any kind of (library) to maintain (todos) here:
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

// IMP:here we are gonna use the (library) to maintain the (todos):

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