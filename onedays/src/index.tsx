import React from 'react';
import ReactDOM from 'react-dom/client';
import App, {theme ,rowCount} from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log('theme', theme)
console.log('rowCount', rowCount)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
