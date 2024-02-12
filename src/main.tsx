if (typeof window !== "undefined") {
  window.global = window;
}
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './resets.css';

interface Props {
  className?: string;
  page: string;
  setPage(d: string): void;
  dinder: any;
  setDinder(d: any): void;
}

createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <App page={''} setPage={function (d: string): void {
      throw new Error('Function not implemented.');
    } } />
  </StrictMode>
);
