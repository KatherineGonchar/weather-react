import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="App text-center">
          <div className="container mt-5">
              <h1>Weather Search Engine</h1>
              <App />
              <h2 id="weather">{""}</h2>
          </div>
          <footer className="mt-4 text-muted">This project was coded by Katherine Gonchar and it is <a
              href="https://github.com/KatherineGonchar/weather-react">open-coded</a></footer>
      </div>
  </React.StrictMode>
);

reportWebVitals();
