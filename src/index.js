import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Find all widget divs
const WidgetDivs = document.querySelectorAll('.widget')

// Inject our React App into each
WidgetDivs.forEach(Div => {
  ReactDOM.render(
      <App domElement={Div}/>,
    Div
  );
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
