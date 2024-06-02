import { create } from 'zustand';
import { TodoItem } from '../../types';

type TodosState = {
  todos: TodoItem[];
  addTodo: (todoItem: TodoItem) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  clearCompleted: () => void;
};

export const useTodosStore = create<TodosState>()((set, get) => ({
  todos: [],
  addTodo: (todoItem) =>
    set((state) => ({ todos: [...state.todos, todoItem] })),
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todoItem) => todoItem.id !== id),
    }))
  },
  completeTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todoItem) => todoItem.id === id ? {...todoItem, completed: true} : todoItem),
    })),
    clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todoItem) => !todoItem.completed ),
    })),
}));
