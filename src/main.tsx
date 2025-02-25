import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './zustand/components/App';
// import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
