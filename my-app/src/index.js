// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './AppMain/index.css';
import App from './AppMain/App';
import { Provider } from 'react-redux';
import { store } from './App/Redux/store'; 
// import { worker } from './Mocks/browser';

const root = ReactDOM.createRoot(document.getElementById('root'));

// if (process.env.NODE_ENV === 'development') {
//   worker.start({
//     onUnhandledRequest: 'bypass', 
//   });
// }
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);