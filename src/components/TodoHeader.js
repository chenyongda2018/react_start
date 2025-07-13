import React from 'react';

const TodoHeader = ({ activeCount, completedCount, filter, setFilter, onClearCompleted }) => {
  return (
    <div className="todo-header">
      <div className="header-top">
        <h1 className="app-title">待办清单</h1>
        <div className="task-stats">
          <span className="stat-item">
            <span className="stat-number">{activeCount}</span>
            个待办
          </span>
          {completedCount > 0 && (
            <span className="stat-item completed">
              <span className="stat-number">{completedCount}</span>
              个已完成
            </span>
          )}
        </div>
      </div>
      
      <div className="filter-tabs">
        <button 
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          全部
        </button>
        <button 
          className={`filter-tab ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          待办
        </button>
        <button 
          className={`filter-tab ${filter === 'important' ? 'active' : ''}`}
          onClick={() => setFilter('important')}
        >
          重要
        </button>
        <button 
          className={`filter-tab ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          已完成
        </button>
        {completedCount > 0 && (
          <button 
            className="clear-completed"
            onClick={onClearCompleted}
          >
            清除已完成
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoHeader;