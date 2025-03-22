if (typeof window !== "undefined") {
  window.global = window;
}
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './resets.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface Props {
  className?: string;
  dinder: any;
  setDinder(d: any): void;
  dinderinvitecode: string;
  setDinderInviteCode(d: string): void;
  page: string;
  setPage(d: string): void;
}

createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route index element={<App
          dinder={undefined} setDinder={function (d: any): void {
            throw new Error('Function not implemented.');
          } } dinderinvitecode={''} setDinderInviteCode={function (d: string): void {
            throw new Error('Function not implemented.');
          } } page={''} setPage={function (d: string): void {
            throw new Error('Function not implemented.');
          } } />} />
        <Route path="/" element={<App page={''} setPage={function (d: string): void {
          throw new Error('Function not implemented.');
        } } dinder={undefined} setDinder={function (d: any): void {
          throw new Error('Function not implemented.');
        } } dinderinvitecode={''} setDinderInviteCode={function (d: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/home" element={<App page={''} setPage={function (d: string): void {
          throw new Error('Function not implemented.');
        } } dinder={undefined} setDinder={function (d: any): void {
          throw new Error('Function not implemented.');
        } } dinderinvitecode={''} setDinderInviteCode={function (d: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/faqs" element={<App page={''} setPage={function (d: string): void {
          throw new Error('Function not implemented.');
        } } dinder={undefined} setDinder={function (d: any): void {
          throw new Error('Function not implemented.');
        } } dinderinvitecode={''} setDinderInviteCode={function (d: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/company" element={<App page={''} setPage={function (d: string): void {
          throw new Error('Function not implemented.');
        } } dinder={undefined} setDinder={function (d: any): void {
          throw new Error('Function not implemented.');
        } } dinderinvitecode={''} setDinderInviteCode={function (d: string): void {
          throw new Error('Function not implemented.');
        } } />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
