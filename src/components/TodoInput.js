import React, { useState } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="添加任务..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          maxLength={200}
        />
        <button 
          type="submit" 
          className={`add-button ${inputValue.trim() ? 'active' : ''}`}
          disabled={!inputValue.trim()}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TodoInput;