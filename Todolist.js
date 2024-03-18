
import React, { useState } from 'react';
import Todoitem from './Todoitem';

const Todolist = () => {
const [inputValue, setInputValue] = useState('');
const [todos, setTodos] = useState([]);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (todo) => {
    const updatedTodos = todos.filter((item) => item !== todo);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <Todoitem key={index} todo={todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default Todolist;
