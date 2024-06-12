import Todo from "./Todo";
import "./App.css";

export default function TodoList({ todos, removeTodo }) {
  return (
    <>
      <h3 className="text-lg bg-black text-white p-10px ml-2 font-bold">
        My Todos
      </h3>
      <ul className="flex-auto justify-center p-2">
        {todos.map((todo, index) => (
          <li key={index}>
            <Todo todos={todo} />
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
