import React, { useState, useMemo } from 'react';
import { Box } from '@mui/material';
import { useTodosStore } from '../../store/todos';
import { useShallow } from 'zustand/react/shallow';
import './TodoList.css';
import { TodoItem } from '../TodoItem';

type TodoListProps = {
  colorTheme: string;
};

export const TodoList: React.FC<TodoListProps> = ({ colorTheme }) => {
  const [todosFilter, setTodosFilter] = useState('all');
  const { todos, clearCompleted } = useTodosStore(
    useShallow((state) => ({
      todos: state.todos,
      clearCompleted: state.clearCompleted,
    }))
  );

  const visibleTodos = useMemo(() => {
    switch (todosFilter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todosFilter, todos]);

  return (
    <Box className="Card">
      <Box className="todo_list">
        {visibleTodos.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
        <Box className="controls" data-theme={colorTheme}>
          <Box>
            <span>{visibleTodos.length} items left</span>
          </Box>
          <Box className="segregate" data-theme={colorTheme}>
            <button
              className={`segregate-btn ${todosFilter == 'all' && 'active'}`}
              id="all"
              onClick={() => setTodosFilter('all')}
            >
              All
            </button>
            <button
              className={`segregate-btn ${todosFilter == 'active' && 'active'}`}
              id="active"
              onClick={() => setTodosFilter('active')}
            >
              Active
            </button>
            <button
              className={`segregate-btn ${
                todosFilter == 'completed' && 'active'
              }`}
              id="completed"
              onClick={() => setTodosFilter('completed')}
            >
              Completed
            </button>
          </Box>
          <Box className="clear" data-theme={colorTheme}>
            <button
              className="clear-btn"
              data-theme={colorTheme}
              onClick={() => clearCompleted()}
            >
              Clear Completed
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
