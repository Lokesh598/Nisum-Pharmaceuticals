import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {window?.location?.pathname !== "/" && <footer className="footer">
      <div>@2023 Copyright : Hackathon WEB3.0 <a href="https://www.nisum.com/">nisum.com</a></div>
      <div>Developed By : Anup Kumar Beerkur, Tulasi Naveen Nadella, Lokesh Singh, Jhansi Mandadi</div>
    </footer>}
  </React.StrictMode>,
  document.getElementById('root')
);

