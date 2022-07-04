import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SppTest1 from './02/spp';
// import Test from './01/test';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SppTest1 />
  </React.StrictMode>
);

reportWebVitals();
