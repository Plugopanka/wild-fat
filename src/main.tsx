import React from 'react';
import './index.module.scss';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {BrowserRouter} from 'react-router-dom';
import './App.module.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
