import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const arrLoader = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <AddTodo arrLoader={arrLoader} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </>
  );
}

export default App;
