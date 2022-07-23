import React from "react";
import { Todos } from "../App";

interface ITodoProps {
  completeTodo: (index: number) => void;
  index: number;
  removeTodo: (index: number) => void;
  todo: Todos;
}

export const Todo: React.FC<ITodoProps> = ({
  completeTodo,
  index,
  removeTodo,
  todo,
}) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
};
