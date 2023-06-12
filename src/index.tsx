import React from 'react';

import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster toastOptions={{ duration: 2500 }} />
    </BrowserRouter>
  </React.StrictMode>,
);
