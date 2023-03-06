import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/App/App';

import './style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);