import React from 'react';

const Todoitem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
};

export default Todoitem;
