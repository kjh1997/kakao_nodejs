import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import LifeCycle from './01/LifeCycle'
// import Library from './03/Library';
// import Clock from './04/Clock';
// import CommentList from './05/CommentList';
import NotificationList from './06/NotificationList';
const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// },1000)
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
