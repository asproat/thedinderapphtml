import { memo, useEffect } from 'react';
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

class siteStep {
  page: string = "";
  sequence: number = 0;

  constructor(newName: string){
    this.page = newName;
    this.sequence = currentSequence++;
    console.log("sequence is now");
    console.log(this.sequence);
  }
}

var startLength = history.length;
var currentSequence = 0;

export const App : FC<Props> = memo(function App() {

  useEffect(() => {    
    onpopstate = (event) => {
      console.log((event.state as siteStep).page);
      console.log((event.state as siteStep).sequence);
      if((event.state as siteStep).sequence < currentSequence) {
        currentSequence--;
        history.back()
      } else {
        setPage((event.state as siteStep).page);
      }
      event.preventDefault();      
    };
    console.log("useEffect end");
  });

  const [page, setPage] = useState("home")

  if (page == "home") {
    return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Website page={page} setPage={function (d: string): void {
        history.pushState(new siteStep(d), d, d);
        setPage(d);
      } } />
    </div>
  );
} else {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FaqsAppComponent  page={page} setPage={function (d: string): void {
        setPage(d);
        history.pushState(new siteStep(d), d, d);
      } } />
    </div>
  );
}
});

console.log("end app.tsk")
