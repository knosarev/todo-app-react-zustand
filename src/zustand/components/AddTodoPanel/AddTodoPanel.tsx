import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useTodosStore } from '../../store/todos';

type AddTodoPanelProps = {
  colorTheme: string;
};

export const AddTodoPanel: React.FC<AddTodoPanelProps> = ({ colorTheme }) => {
  const [name, setName] = useState('');

  const addTodo = useTodosStore((state) => state.addTodo);

  const addTodoHandler = () => {
    if (!name) {
      alert('You have to entere a name');
      return;
    }

    addTodo({ id: Math.random() * 1000, name, completed: false });
    setName('');
  };

  return (
    <Box className="new_todo" data-theme={colorTheme}>
      <Box
        className="checkbox_container"
        sx={{
          width: '2.5rem',
          height: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box>
      <input
        required
        value={name}
        type="text"
        placeholder="Create a new todo"
        onChange={(e) => setName(e.target.value)}
      />
      <Box>
        <button className="new_todo-btn" onClick={addTodoHandler}>
          Add
        </button>
      </Box>
    </Box>
  );
};
