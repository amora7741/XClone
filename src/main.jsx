import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import Router from './components/Router';
import { AuthProvider } from './context/AuthContext';
import { TweetProvider } from './context/TweetContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TweetProvider>
        <Router />
      </TweetProvider>
    </AuthProvider>
  </React.StrictMode>
);
