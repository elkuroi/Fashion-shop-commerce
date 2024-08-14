// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './AppMain/index.css';
import App from './AppMain/App';
// import { worker } from './Mocks/browser';

const root = ReactDOM.createRoot(document.getElementById('root'));

// if (process.env.NODE_ENV === 'development') {
//   worker.start({
//     onUnhandledRequest: 'bypass', // Игнорировать запросы, для которых нет обработчиков
//   });
// }
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);