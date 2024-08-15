import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'

// document.documentElement.className = 'bg-gradient-to-b from-[#0B0C10] to-[#1F2833] h-full w-full';
document.documentElement.style.background = 'linear-gradient(to bottom, #0B0C10, #1F2833)';
document.body.style.background = 'linear-gradient(to bottom, #0B0C10, #1F2833)';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 