import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import Router from './components/Router';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
