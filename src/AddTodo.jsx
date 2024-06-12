import { useState } from "react";

export default function AddTodo({ arrLoader }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };
  const handleCLick = (event) => {
    event.preventDefault();

    arrLoader(inputValue);
  };
  return (
    <>
      <form
        action=""
        onSubmit={AddTodo}
        className="flex flex-col gap-3 w-80 mb-10 p-5 rounded-lg bg-zinc-900 align-center"
      >
        <input
          type="text"
          placeholder="write task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="br-1 font-bold" onClick={handleCLick}>
          Submit
        </button>
      </form>
    </>
  );
}
