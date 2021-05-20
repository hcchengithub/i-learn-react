import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.debug_flag = true // 這裡是 front end 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
