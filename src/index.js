import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    document.getElementById('debug').textContent += ' React has rendered.';
  } catch (error) {
    console.error('Error rendering app:', error);
    document.body.innerHTML += `<p>Error rendering app: ${error.message}</p>`;
  }
} else {
  document.body.innerHTML += '<p>Error: Root element not found</p>';
}

reportWebVitals();