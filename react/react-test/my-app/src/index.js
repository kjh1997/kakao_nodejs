import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './01/test';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);

reportWebVitals();
