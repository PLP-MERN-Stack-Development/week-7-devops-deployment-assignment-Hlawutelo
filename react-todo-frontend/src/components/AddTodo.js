import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new task..."
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
}

export default AddTodo;
