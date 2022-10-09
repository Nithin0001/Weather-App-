import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


document.addEventListener("contextmenu", function(e){ 
  e.preventDefault(); 
}, false); 
  
document.addEventListener("keydown", function(e) { 
  //document.onkeydown = function(e) { 
  // "I" key 
  if (e.ctrlKey && e.shiftKey && e.key == 73) { 
  disabledEvent(e); 
  } 
  // "J" key 
  if (e.ctrlKey && e.shiftKey && e.key == 74) { 
  disabledEvent(e); 
  } 
  // "S" key + macOS 
  if (e.key == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) { 
  disabledEvent(e); 
  } 
  // "U" key 
  if (e.ctrlKey && e.key == 85) { 
  disabledEvent(e); 
  } 
  // "F12" key 
  if (e.key == 28) { 
  disabledEvent(e); 
  } 
  // "C" key 
  if (e.ctrlKey && e.key == 67) { 
  disabledEvent(e); 
  } 
}, false); 

function disabledEvent(e){ 
  if (e.stopPropagation){ 
  e.stopPropagation(); 
  } else if (window.event){ 
  window.event.cancelBubble = true; 
  } 
  e.preventDefault(); 
  return false; 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
