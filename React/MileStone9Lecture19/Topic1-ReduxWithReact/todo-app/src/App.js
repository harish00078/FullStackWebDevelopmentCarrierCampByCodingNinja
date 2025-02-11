import { useState } from "react";
// Importing the (provider):
import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/TodoForm";
import TodoList from "./components/ToDoList/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  };

  return (
    <div>
      <h1>To Do App</h1>
      {/* IMP-NOTE:we have two ways of creating and using (redux-store):
      // V.IMP:The Provider component takes a (store-prop), which is the Redux store that you want to provide to your application:
      // V.IMP: the use of multiple stores is not recommended:

      -> 1-way: create store in the form of (global-redux-store):and then we can use it with the specific or all the components of the application:with the help of (react-redux) libraries (provider-component):
      -> 2-way: create store in the form of (component-redux-store):we call it component-store.because here we create and use the (specific-store) for the (specific-component):and provide that specific-store to the specific-component:with the help of (provider-component) as well:by passing the specific-store to the store-prop */}

      {/* Here we using the first-way to create and use store: */}
      <Provider>
        <TodoForm onCreateTodo={createTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </Provider>
    </div>
  );
}

export default App;
