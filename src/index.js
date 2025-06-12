import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { inject } from '@vercel/analytics';

// Initialize analytics
inject();

console.log('Vercel Analytics initialized');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Analytics 
      debug={true}
      beforeSend={(event) => {
        console.log('Analytics Event:', event);
        return event;
      }}
    />
  </React.StrictMode>
); 