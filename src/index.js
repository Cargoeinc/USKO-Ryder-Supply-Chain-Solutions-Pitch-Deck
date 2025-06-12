import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Analytics } from '@vercel/analytics/react';

console.log('Attempting to load Vercel Analytics...');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Analytics 
      debug={true}
      mode={'production'}
      beforeSend={(event) => {
        console.log('Analytics Event:', event);
        return event;
      }}
    />
  </React.StrictMode>
); 