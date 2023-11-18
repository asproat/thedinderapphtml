import { memo } from 'react';
import type { FC } from 'react';
import { useState } from 'react';
import classes from './Faqs.module.css';
import resets from './components/_resets.module.css';
import { Website } from './components/Website/Website.js';
import { FaqsAppComponent } from './components/Faqs/Faqs.js';

interface Props {
  className?: string;
  page: string;
  setPage(d: string): void;
}



console.log("in app.tsx")

export const App: FC<Props> = memo(function App() {
  const [page, setPage] = useState("home")
  if (page == "home") {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Website page={page} setPage={function (d: string): void {
        setPage(d);
      } } />
    </div>
  );
} else {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FaqsAppComponent  page={page} setPage={function (d: string): void {
        setPage(d);
      } } />
    </div>
  );
}
});


console.log("end app.tsk")