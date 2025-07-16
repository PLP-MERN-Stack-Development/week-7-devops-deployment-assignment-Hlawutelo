import React from 'react';

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>❌</button>
    </li>
  );
}

export default TodoItem;
