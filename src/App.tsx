import "./App.css";
import React from "react";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import { useState } from "react";

export type Todos = {
  isCompleted?: boolean;
  text: string;
};

export function App() {
  const [todos, setTodos] = useState<Array<Todos>>([
    {
      text: "clean the house",
      isCompleted: false,
    },
    { text: "study react", isCompleted: false },
  ]);

  const addTodo = (text: string): void => {
    const newTodos = [...todos, { text }];

    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <div className="app">
      <div className="todo-list">
        {!todos.length ? (
          <p className="no-todos">There are no todos</p>
        ) : (
          todos.map((todo, index) => (
            <Todo
              completeTodo={completeTodo}
              index={index}
              key={index}
              removeTodo={removeTodo}
              todo={todo}
            />
          ))
        )}
        <p className="add-todo">Add todo:</p>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
