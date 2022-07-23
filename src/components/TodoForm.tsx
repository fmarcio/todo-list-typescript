import React, { useRef } from "react";
import { useState } from "react";

interface ITodoFormProps {
  addTodo: (value: string) => void;
}

export const TodoForm: React.FC<ITodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    if (!value) return;
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        onChange={(e) => setValue(e.target.value)}
        onClick={handleSubmit}
        type="text"
        value={value}
      ></input>
    </form>
  );
};
