import { AddTodoPanel } from '../AddTodoPanel';
import { Header } from '../Header';
import { TodoList } from '../TodoList';
import './App.css';

const colorTheme = 'dark';

export const App = () => {
  return (
    <div className="container" data-theme={colorTheme}>
      <Header />
      <AddTodoPanel colorTheme={colorTheme} />
      <TodoList colorTheme={colorTheme} />
    </div>
  );
};
