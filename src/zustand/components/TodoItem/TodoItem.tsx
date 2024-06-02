import React from 'react';
import { Box } from '@mui/material';
import IconCross from '../../../assets/iconCross.svg';
import { TodoItem as TodoItemType } from '../../../types';
import { useTodosStore } from '../../store/todos';

type TodoItemProps = {
  item: TodoItemType;
};

export const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const { completeTodo, deleteTodo } = useTodosStore((state) => ({
    completeTodo: state.completeTodo,
    deleteTodo: state.deleteTodo,
  }));

  return (
    <div className="todo_item">
      <Box
        className="checkbox_container"
        sx={{
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => completeTodo(item.id)}
          className={`${item.completed ? 'checkbox-checked' : 'checkbox'}`}
        ></button>
      </Box>
      <Box
        sx={{ flex: '1', padding: '10px' }}
        className={`${item.completed ? 'todo--completed' : ''}`}
      >
        {item.name}
      </Box>
      <Box>
        <button className="todo_item--btn" onClick={() => deleteTodo(item.id)}>
          <img src={IconCross}></img>
        </button>
      </Box>
    </div>
  );
};

export default TodoItem;
