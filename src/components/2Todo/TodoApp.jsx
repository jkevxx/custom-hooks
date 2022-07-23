import React, { useState } from "react";
import useTodos from "../../hooks/useTodos";

const initialTodo = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node.js" },
];

const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodo);

  return (
    <div>
      <button onClick={() => addTodo({ title: "new Task" })}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
