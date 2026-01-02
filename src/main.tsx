import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root')!;

// Check if the app was pre-rendered by react-snap
if (rootElement.hasChildNodes()) {
  // Pre-rendered content exists, hydrate it (makes it interactive)
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // No pre-rendered content, render normally (development mode)
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
