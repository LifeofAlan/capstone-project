import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { StylePreferencesProvider } from './contexts/StylePreferencesContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <StylePreferencesProvider>
        <App />
      </StylePreferencesProvider>
    </HashRouter>
  </StrictMode>
);