import { memo, useEffect } from 'react';
import type { FC } from 'react';
import { useState } from 'react';
import classes from './Faqs.module.css';
import resets from './components/_resets.module.css';
import { Website } from './components/Website/Website.js';
import { FaqsAppComponent } from './components/Faqs/Faqs.js';
import { DinderForm } from './components/DinderForm/DinderForm.js';

interface Props {
  className?: string;
  page: string;
  setPage(d: string): void;
  dinder: any;
  setDinder(d: any): void;
}

console.log("in app.tsx")

class siteStep {
  page: string = "";
  sequence: number = 0;

  constructor(newName: string){
    this.page = newName;
    this.sequence = ++currentSequence;
    //history.pushState(this, newName, newName)
    console.log("sequence is now");
    console.log(this.sequence);
  }
}

var currentSequence = 0;

export const App : FC<Props> = memo(function App() {

  useEffect(() => {
    function handlePopStateEvent(e: any) {
      e.preventDefault();      

      console.log("useEffect");
      console.log(e);
      console.log("pop state");
      console.log(e.state);
      console.log("currentsequence");
      console.log(currentSequence);

      /*
      if(e.state != null) {
        console.log((e.state as siteStep).page);
        console.log((e.state as siteStep).sequence);
        console.log(currentSequence);
        // back
        if((e.state as siteStep).sequence == currentSequence) {
          console.log("back");
          currentSequence--;
          console.log("currentSequence now: " + currentSequence);
          history.back();
          console.log("after history back");
          setPage((e.state as siteStep).page);
          console.log("after set page");
        } else if ((e.state as siteStep).sequence > currentSequence) {
          console.log("forward")
          currentSequence++;
          setPage((e.state as siteStep).page);
          history.forward();
        }
      } else {
        setPage("home");
      }
      console.log("useEffect end");
  
      console.log(e);
      */
      console.log("Check if the function Working")

    }

    console.log("Check if Effect Working")

    window.addEventListener("popstate", handlePopStateEvent);

    return () => window.removeEventListener("popstate", handlePopStateEvent);

  }, []);

  const [page, setPage] = useState("home")

  const [dinder, setDinder] = useState(null)

  console.log("Page is")
  console.log(page)

  if (page == "home") {

    return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Website page={page} setPage={function (d: string): void {
              history.pushState(new siteStep(d), d, 
                d.replace('/invitation', '')
              );              
              setPage(d);
            } }
      dinder={null} setDinder={function (d: any): void {
        setDinder(d)
      }}
 />
    </div>
  );
} else if (page == "dinderform") {

  console.log("page now dinderform")
  console.log(dinder)
  
  return (
  <div className={`${resets.clapyResets} ${classes.root}`}>
    <DinderForm page={page} setPage={function (d: string): void {
            history.pushState(new siteStep(d), d, 
              d.replace('/invitation', '')
            );
            setPage(d);
          } }
    dinder={dinder} setDinder={function (d: any): void {
      setDinder(d)
    }}
/>
  </div>
);
} else {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FaqsAppComponent  page={page} setPage={function (d: string): void {
        setPage(d);
        history.pushState(new siteStep(d), d, 
          d.replace('/invitation', '')
        );
      } } />
    </div>
  );
}
});

console.log("end app.tsk")
