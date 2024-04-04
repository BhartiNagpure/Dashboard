import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from './store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={(configureStore())}>
    <React.StrictMode>
   
        <App />
      
    </React.StrictMode>
  </Provider>
);


