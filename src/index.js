import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Header() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a parent / child & sibling exercise</p>
    </div>
  )
} 

ReactDOM.render(<Header/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
