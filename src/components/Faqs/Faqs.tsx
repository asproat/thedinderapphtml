import { memo, useEffect } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { useState } from 'react';
import { Group3Icon } from './Group3Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCollapse } from '@coreui/react';
import { CRow } from '@coreui/react';
import { MenuMenu_Alt_02 } from './MenuMenu_Alt_02/MenuMenu_Alt_02.js';
import classes from './Faqs.module.css';

interface Props {
  className?: string;
  page?: string;
  setPage(d: string): void;
}

export const FaqsAppComponent: FC<Props> = memo(function FaqsAppComponent({page, setPage}) {

console.log("start faqs")

var darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const mql = window.matchMedia('(max-width: 600px)');

let mobileView = mql.matches;
var videoWidth = "500px"
var videoHeight = "297px"

var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (mobileView) {
  videoWidth = screenWidth + "px"
  videoHeight = 9 / 16 * screenWidth + "px"
}

const [question,setQuestion] = useState(Array(12))

function toggleIsShown(index: number){
    setQuestion(prev => {
        const clone = [ ...prev ];

        for(var i = 0; i < question.length; i++) {
          if(i != index) {
            clone[i] = false;
          }
        }

        clone[index] = !clone[index];

        return clone;
    });
}

console.log("return actual website")

/* @figmaId 154:24 */
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.callToAction}>
        <div className={classes.burgermenu}>
          <MenuMenu_Alt_02 />
        </div>
        <div className={classes.group3} onClick={() => setPage("home")}>
          <div className={classes.group2}>
            <GroupIcon2 className={classes.icon} />
          </div>
          <div className={classes.thedinderappCom}>thedinderapp.com</div>
        </div>
        <div className={classes.links}>
          <div className={classes.topLink}>Company</div>
          <div className={classes.topLink}>Privacy Policy</div>
          <div onClick={() => setPage("faqs")} className={classes.topLink}>FAQs</div>
        </div>

      </div>
      <div className={classes.faq}>
    <CRow>
    <div className={classes.welcomeNameOfUser}>FAQs</div>
    <div  
      className={classes.question} 
      onClick={() => toggleIsShown(0)} >What's a Dinder?</div>
        <CCollapse visible={question[0]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(0)} >
            A Dinder is an event held on a specific day and time where two or more people will be meeting at a currently undecided restaurant in a specific area. The Dinder App allows you to share the date and time and a list of restaurants in that area for people to vote on. The host can then pick the most popular place from the list. 
            </div>
        </CCollapse>
      </CRow>
      <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(1)} >Why does the app say “Fetching restaurant details…” every time I pick a Dinder?</div>
        <CCollapse visible={question[1]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(1)} >
              That’s Google’s fault. We use a service provided by Google to find restaurants and get information about them. We wish we could, but we can’t. They only allow us to keep an identifier for the restaurants, no other information. Not the name, address, rating, etc. So, every time you open a Dinder, if we haven’t fetched the other information since the last time you started the app, we have to get them again.
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(2)} >What information do you share with other companies?</div>
        <CCollapse visible={question[2]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(2)} >
              Nothing.
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(3)} >No seriously, what information do you share with other companies?</div>
        <CCollapse visible={question[3]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(3)} >
              Seriously, nothing. 
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(4)} >Yeah, but you’re going to in the future.</div>
        <CCollapse visible={question[4]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(4)} >
              Nope, abso-freaking-lutely not. 
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(5)} >Okay then, what information do you keep for yourself?</div>
        <CCollapse visible={question[5]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(5)} >
              The only thing we know about anyone using the app is an identifier that lets us show you the Dinders you’re a part of that haven’t expired yet. Yes, the app asks to know where you are when you create a new Dinder because you probably want to pick places near your current location. But you can deny that permission and use the app without any restrictions. And when we create the Dinder based on the location you pick, we through that location away forever. What’s more, 1 week after the Dinder date, we delete everything about it except for adding a marker for everyone who participated so they know how many they’ve been part of and completely anonymous counts of the stats of the Dinder for the month it occurred. After it’s deleted, we don’t even know who was in which Dinder, just how many they were part of. As for the monthly stats, it’s strictly counts, averages, minimums, and maximums. 
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(6)} >When will you start showing ads in the app?</div>
        <CCollapse visible={question[6]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(6)} >
              Never. Period. End of discussion. If you want to know how serious the creator of the app is about this, look up how the CEO of Costco reacted when they wanted to increase the price of the hot dog there. (Warning, it’s not really safe for work.)
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(7)} >I tried to share my invitation with someone else after I used it, but it didn’t work. Why?</div>
        <CCollapse visible={question[7]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(7)} >
              Every invitation code will only work once. After someone has used it to join, it’s no longer valid. We do this so that there’s control over who gets to participate and vote on the choices. 
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(8)} >What’s a Double Plus? What’s a Deal Breaker?</div>
        <CCollapse visible={question[8]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(8)} >
              A double plus is like two plus votes at once. A Deal Breaker is like two minus votes at once. This feature has to be turned on by the creator of the Dinder and they can limit the number of each you can use.
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(9)} >I hit the wrong button. How do I undo or correct my vote?</div>
        <CCollapse visible={question[9]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(9)} >
              Tap the Current Ratings tab and find the choice you want to change. The button you hit will be solid red or green, not outlined and not faded. Tap the solid button if you just want to remove your vote or one of the outlined buttons to change it.
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(10)} >The app is asking for a name to join the Dinder. I thought you didn’t want to know who I am.</div>
        <CCollapse visible={question[10]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(10)} >
              We don’t. You can put in whatever name you want or choose to stay anonymous (which will make your name “Person 1”, “Person 2”, etc.). And when the Dinder is over, we even through that name away. Keep in mind, the Dinder host can remove you if they don’t like the name you picked. 
          </div>
        </CCollapse>
    </CRow>
    <CRow>
      <div  
        className={classes.question} 
        onClick={() => toggleIsShown(11)} >Somebody put an inappropriate name or comment into the Dinder. Why do you allow that?</div>
        <CCollapse visible={question[11]}>
            <div className={classes.answer} 
              onClick={() => toggleIsShown(11)} >
              We don’t restrict anything. If something is offensive to you, contact the person who sent you the invitation. The person who created the Dinder (we call them “the host”) can remove them and their comments. 
          </div>
        </CCollapse>
    </CRow>
  </div>
  <div className={classes.appDownload}>
        <div className={classes.frame2757}>
          <div className={classes.group32} onClick={() => setPage("home")}>
            <Group3Icon className={classes.icon} />
          </div>
        </div>
        <div className={classes.frame2751}>
          <div className={classes.bottomLink}>Company</div>
          <div className={classes.bottomLink}>Privacy policy</div>
          <div onClick={() => setPage("faqs")} className={classes.bottomLink}>FAQs</div>
        </div>
      </div>
      <script>
    </script>
    </div>
  );  
});



