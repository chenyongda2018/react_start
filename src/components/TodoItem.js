import React, { useState, useRef, useEffect } from 'react';

const TodoItem = ({ todo, index, onToggle, onDelete, onToggleImportant, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [isEditing]);

  const handleSaveEdit = () => {
    const trimmedText = editText.trim();
    if (trimmedText && trimmedText !== todo.text) {
      onEdit(trimmedText);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.important ? 'important' : ''}`}>
      <div className="todo-content">
        <button 
          className={`checkbox ${todo.completed ? 'checked' : ''}`}
          onClick={onToggle}
          aria-label={todo.completed ? '标记为未完成' : '标记为已完成'}
        >
          {todo.completed && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        
        {isEditing ? (
          <input
            ref={editInputRef}
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSaveEdit}
            onKeyDown={handleKeyDown}
            maxLength={200}
          />
        ) : (
          <span 
            className="todo-text"
            onDoubleClick={() => setIsEditing(true)}
            title="双击编辑"
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        <button
          className={`action-btn important-btn ${todo.important ? 'active' : ''}`}
          onClick={onToggleImportant}
          title={todo.important ? '取消重要' : '标记为重要'}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L10.09 6.26L15 7L11.5 10.14L12.18 15L8 12.77L3.82 15L4.5 10.14L1 7L5.91 6.26L8 2Z" 
                  fill={todo.important ? "currentColor" : "none"} 
                  stroke="currentColor" 
                  strokeWidth="1.5"/>
          </svg>
        </button>
        
        <button
          className="action-btn delete-btn"
          onClick={onDelete}
          title="删除任务"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6H13M5 6V12C5 13 6 14 7 14H9C10 14 11 13 11 12V6M7 3V2H9V3M9 3H7" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;