import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onToggleImportant, onEditTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M32 8C20.96 8 12 16.96 12 28c0 7.39 3.9 13.89 9.75 17.5L32 56l10.25-10.5C48.1 41.89 52 35.39 52 28 52 16.96 43.04 8 32 8z" stroke="#e1e1e1" strokeWidth="2" fill="none"/>
            <path d="M32 36c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" stroke="#e1e1e1" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <h3 className="empty-title">暂无任务</h3>
        <p className="empty-description">添加一个任务开始你的待办清单之旅</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
          onToggleImportant={() => onToggleImportant(todo.id)}
          onEdit={(newText) => onEditTodo(todo.id, newText)}
        />
      ))}
    </div>
  );
};

export default TodoList;