import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX - Rendering JSX as a first argument of ReactDOM.render()
// Assign JSX to a variable to pass as a first argument of ReactDOM.render()
const header = (
  <div>
    <h1>Hello World</h1>
    <p>This is a parent / child & sibling exercise</p>
  </div>
)

ReactDOM.render(header,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
