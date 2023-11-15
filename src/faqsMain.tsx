import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import './resets.css';
import { FaqsApp } from './faqsApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FaqsApp />
  </StrictMode>,
);
