import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './ContextApi/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* Bind The App Compoent for Router*/}
  <BrowserRouter>
  {/* For ContextApi Bind the App Compoenet*/}
  <UserContextProvider>
  <App />
  </UserContextProvider>
  </BrowserRouter>
  </React.StrictMode>
);

